import { useEffect, useState } from "react";
import { Button } from "./ui/button";

import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceState,
  updateCurrentLanguate,
} from "@/redux/slices/compilerSlice";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { RootState } from "@/redux/reduxStore";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { DialogCloseButton } from "./ShareModel";
import { toast } from "sonner";

const CompilerSubHeader = () => {
  const [saveCodeLoad, setSaveCodeLoad] = useState<boolean>(false);
  const [shareBtn, setShareBtn] = useState<boolean>(false);

  const navigate = useNavigate(); // to navigate the user to their saved code
  const completeCode = useSelector(
    (state: RootState) => state.compilerSlice.completeCode
  );

  const { urlId } = useParams();
  useEffect(() => {
    urlId ? setShareBtn(true) : setShareBtn(false);
  }, [urlId]);

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
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast("Invalid URL!!! Default Code Loaded");
        }
      }
      handleError(error);
    } finally {
      setSaveCodeLoad(false);
    }
  };

  const dispatch = useDispatch();
  const currentLang = useSelector(
    (state: RootState) => state.compilerSlice.currentLang
  );

  return (
    <div className="__helper_header h-[5rem] bg-black text-white p-2 flex items-center justify-between">
         <div className="__select_menu ml-4">

<Tabs defaultValue={currentLang}
 onValueChange={(value) =>
  dispatch(
    updateCurrentLanguate(value as CompilerSliceState["currentLang"])
  )
}
className="w-[400px]">
  <TabsList>
    <TabsTrigger value="html">HTML</TabsTrigger>
    <TabsTrigger value="css">CSS</TabsTrigger>
    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
  </TabsList>

</Tabs>


      </div>
      <div className="flex gap-2 mr-4">
        <Button variant="save" disabled={saveCodeLoad} onClick={handleSaveCode}>
          {saveCodeLoad ? "Saving..." : "Save"}
        </Button>
        {/* share button  */}
        {shareBtn && <DialogCloseButton />}
      </div>

  
    </div>
  );
};

export default CompilerSubHeader;
