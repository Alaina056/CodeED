// basic structure of slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceState {
    html: string;
    css:string;
    javascript: string;
    currentLang: "html"|"css"|"javascript";

}
const initialState: CompilerSliceState={
    html:"",
    css:"",
    javascript: "",
    currentLang: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguate: (state,action: PayloadAction<CompilerSliceState["currentLang"]>)=>{
            state.currentLang = action.payload;
        },
    },
});
//------------------------------------

// slices are exported by the following way, we cannot
// do it directly
export default compilerSlice.reducer;
export const {updateCurrentLanguate}= compilerSlice.actions;