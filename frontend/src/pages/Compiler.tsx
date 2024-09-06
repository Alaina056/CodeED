import CodeMirrorColor from "@/components/CodeMirrorColor";
import CompilerSubHeader from "@/components/CompilerSubHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { RootState } from "@/redux/reduxStore";
import { useSelector } from "react-redux";

const Compiler = () => {
  // retrieve value from reduxStore
  // const html = useSelector((state:RootState)=>{state.compilerSlice.html});
  // const css = useSelector((state:RootState)=>{state.compilerSlice.css});
  // const javascript = useSelector((state:RootState)=>{state.compilerSlice.javascript});
  
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
          right
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compiler;
