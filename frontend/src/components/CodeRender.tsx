import { RootState } from "@/redux/reduxStore";
import { useSelector } from "react-redux";


// to preview the code {right handside of screen}
const CodeRender = () => {
  const completeCode = useSelector(
    (state: RootState) => state.compilerSlice.completeCode
  );

  const newCode = `
  <html>
    <style>
    ${completeCode.css}
    </style>

    <body> ${completeCode.html}
    </.body>

    <script> ${completeCode.javascript} 
    </script>
  </html>
  `;
  //encoding so that we can tell iframe that it is not route but actual code
  const encodedCode = `data:text/html;charset=utf-8, ${encodeURIComponent(
    newCode
  )}`;

  return (
    <div className="bg-white border-2 border-red-50 h-[calc(100dvh-5rem)]">
      <iframe className="w-full h-full" src={encodedCode} />
      {/* code is rendering inside this iframe so style this  */}
      {/* Rendering, in the context of computing and web development, refers to the process of generating a visual representation of data or content. It involves taking raw data, code, or objects and converting them into a displayable format on a screen or other medium. */}
    </div>
  );
};

export default CodeRender;
