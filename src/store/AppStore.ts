import userSlice from "@/slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
const AppStore = configureStore({ reducer: { userSlice } });
export type storeState = ReturnType<typeof AppStore.getState>;
export default AppStore;
