import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: "light" | "dark";
};

const initialState: InitialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const themeActions = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
