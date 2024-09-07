import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceState,
  updateCurrentLanguate,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/reduxStore";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {DialogCloseButton} from "./ShareModel";

const CompilerSubHeader = () => {

  const [saveCodeLoad, setSaveCodeLoad] = useState<boolean>(false);
  const navigate = useNavigate(); // to navigate the user to their saved code
  const completeCode = useSelector(
    (state: RootState) => state.compilerSlice.completeCode
  );

  const handleSaveCode = async () => {
    setSaveCodeLoad(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/compiler/save",
        { completeCode: completeCode } //data to be stored in db
      );
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true }); // replace the complete url evertime the function is being called


    } catch (error) {
      handleError(error);
    }
    finally{
      setSaveCodeLoad(false)
    }
  };

  const dispatch = useDispatch();
  const currentLang = useSelector(
    (state: RootState) => state.compilerSlice.currentLang
  );

  return (
    <div className="__helper_header h-[5rem] bg-black text-white p-2 flex items-center justify-between">
      <div className="flex gap-2">
        <Button variant="save" disabled={saveCodeLoad} onClick={handleSaveCode}>
          {saveCodeLoad? "Saving...": "Save"}
        </Button>
      <DialogCloseButton/>
      </div>

      <div className="__select_menu">
        <Select
          defaultValue={currentLang}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguate(value as CompilerSliceState["currentLang"])
            )
          }
        >
          <SelectTrigger className="w-[6.7rem] focus:right-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CompilerSubHeader;
