import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col ">
      <Loader2Icon className=" animate-spin my-3" />
      <p>FETCHING DATA...</p>
    </div>
  );
};
export default Loading;
