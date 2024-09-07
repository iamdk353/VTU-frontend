import { storeState } from "@/store/AppStore";
import { useSelector } from "react-redux";
const useUserStore = () => {
  const {
    image,
    isVerified,
    isLoading,
  }: { image: string; isVerified: boolean; isLoading: boolean } = useSelector(
    (state: storeState) => state.userSlice
  );
  return { image, isVerified, isLoading };
};
export default useUserStore;
