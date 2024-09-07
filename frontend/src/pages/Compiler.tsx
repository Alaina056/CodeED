import CodeMirrorColor from "@/components/CodeMirrorColor";
import CodeRender from "@/components/CodeRender";
import CompilerSubHeader from "@/components/CompilerSubHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { loadSavedCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const Compiler = () => {
  const {urlId} = useParams();                       
  const dispatch = useDispatch();
  const loadCode = async ()=>{
    try {
      const response = await axios.post("http://localhost:4000/compiler/load",
        {urlId: urlId
        }
      );
     dispatch(loadSavedCode(response.data.completeCode))
     // console.log(response.data);
    } catch (error) {
      handleError(error);
    }
  }
 
  useEffect(()=>{
    if(urlId){
      loadCode();
    }
  },[urlId])
  return (
    <div className=" w-full h-[calc(100dvh-5rem)] text-white">
      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border md:min-w-[50rem]"
      >
        <ResizablePanel
          defaultSize={50}
          className="h-[calc(100dvh-5rem)] min-w-[10rem]"
        >
          <CompilerSubHeader />
          <CodeMirrorColor />
        </ResizablePanel>
        <ResizableHandle withHandle className="border border-black" />

        <ResizablePanel
          defaultSize={50}
          className="h-[calc(100dvh-5rem)] min-w-[10rem]"
        >
          <CodeRender />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compiler;
