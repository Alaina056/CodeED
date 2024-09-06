import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";

export const store = configureStore({     //to create a store
    reducer:{                            
      compilerSlice,  
    },
});

export type RootState = ReturnType<typeof store.getState>;  // typescript

