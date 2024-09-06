import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

// For Dracula Code Mirror Theme
import { tags as t } from '@lezer/highlight';
import {  draculaInit } from '@uiw/codemirror-theme-dracula';

// to support multiple languages
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reduxStore";

const CodeMirrorColor = () => {

  const currentLang = useSelector(
    (state: RootState)=>state.compilerSlice.currentLang);

  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val:any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage(currentLang)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })}
    />
  );
};

export default CodeMirrorColor;
