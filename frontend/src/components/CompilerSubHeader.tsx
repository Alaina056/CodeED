import React from "react";
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
import { CompilerSliceState, updateCurrentLanguate } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/reduxStore";


const CompilerSubHeader = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(
    (state: RootState)=>state.compilerSlice.currentLang);

  return (
    <div className="__helper_header h-[5rem] bg-black text-white p-2 flex items-center justify-between">
      <div className="flex gap-2">
        <Button variant="save">Save</Button>
        <Button variant="secondary">Share</Button>
      </div>

      <div className="__select_menu">
        <Select defaultValue={currentLang} onValueChange={(value)=>dispatch(updateCurrentLanguate(value as CompilerSliceState["currentLang"]))}> 
          <SelectTrigger className="w-[6.7rem] focus:right-0">  
            <SelectValue/>
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
