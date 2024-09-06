import CodeMirrorColor from "@/components/CodeMirrorColor";
import CodeRender from "@/components/CodeRender";
import CompilerSubHeader from "@/components/CompilerSubHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Compiler = () => {

  
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
          <CodeRender/>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compiler;
