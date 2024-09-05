import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  image: "",
  isVerified: false,
  isLogin: false,
  token: "",
};
const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setIsVerified: (state, action: PayloadAction<boolean>) => {
      state.isVerified = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});
export const { setImage, setIsVerified, setIsLogin, setToken } =
  userSlice.actions;
export default userSlice.reducer;
