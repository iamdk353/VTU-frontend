import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  image: "",
  isVerified: false,
  isLogin: false,
  isLoading: false,
};
const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
export const { setImage, setIsVerified, setIsLogin, setUserLoading } =
  userSlice.actions;
export default userSlice.reducer;
