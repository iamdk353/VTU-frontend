import { storeState } from "@/store/AppStore";
import { useSelector } from "react-redux";
const useUserStore = () => {
  const { image, isVerified }: { image: string; isVerified: boolean } =
    useSelector((state: storeState) => state.userSlice);
  return { image, isVerified };
};
export default useUserStore;
