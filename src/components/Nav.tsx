import { Button } from "./ui/button";
import { Menubar } from "./ui/menubar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useNavigate } from "react-router-dom";
import MobileSignin from "./ui/MobileSignin";
import SignIn from "./signIn";
import { User2Icon } from "lucide-react";
import Logout from "./Logout";
import useUserStore from "@/hooks/useUserStore";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import useAuthHeader from "@/hooks/useAuthHeader";
// import { useAuth0 } from "@auth0/auth0-react";
// import { setImage, setIsLogin, setIsVerified } from "@/slices/userSlice";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const { image, isVerified } = useUserStore();
  const navigate = useNavigate();
  return (
    <div>
      <Menubar className="px-7 h-20 flex justify-between  items-center ">
        <Button
          variant={"ghost"}
          className="text-xl text-black"
          onClick={() => {
            navigate("/");
          }}
        >
          VTU NOTIFY
        </Button>
        <div className="hidden md:flex">
          {!isVerified && <SignIn />}
          {isVerified && (
            <div className="size-8 cursor-pointer hover:shadow-md flex justify-center items-center rounded-full">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger>
                  {image === "" ? (
                    <>
                      <User2Icon />
                    </>
                  ) : (
                    <img
                      src={image}
                      className="rounded-full"
                      onClick={() => setOpen(!open)}
                    />
                  )}
                </PopoverTrigger>
                <PopoverContent className="space-y-3">
                  <Button
                    className="w-full"
                    onClick={() => {
                      setOpen(!open);
                      navigate("profile");
                    }}
                  >
                    Profile
                  </Button>
                  <Logout />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
        <MobileSignin />
      </Menubar>
    </div>
  );
};
export default Nav;
