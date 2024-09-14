import React from "react";
import CodeMirror from "@uiw/react-codemirror";

// For Dracula Code Mirror Theme
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";

// to support multiple languages
import {
  loadLanguage,
  langs,
} from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reduxStore";
import { updateCode } from "@/redux/slices/compilerSlice";

const CodeMirrorColor = () => {
  // useSelector function accepts a selector callback as first argument . this callback function returns a part of Redux store's state or compute derived data
  const currentLang = useSelector(
    (state: RootState) => state.compilerSlice.currentLang
  );

  const completeCode = useSelector(
    (state: RootState) => state.compilerSlice.completeCode
  );
  const dispatch = useDispatch();
  const onChange = React.useCallback((value: string) => {
    dispatch(updateCode(value));
  }, []);

  return (
    <CodeMirror
      value={completeCode[currentLang]}
      height="calc(100vh - 10rem)"
      className="code-editor"
      extensions={[loadLanguage(currentLang)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
};

export default CodeMirrorColor;
