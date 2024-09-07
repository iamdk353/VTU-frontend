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
import { Loader2, User2Icon } from "lucide-react";
import Logout from "./Logout";
import useUserStore from "@/hooks/useUserStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const { image, isVerified, isLoading } = useUserStore();
  const navigate = useNavigate();
  const [isHealth, setHealth] = useState(false);
  const [healthChecking, setHelthChecking] = useState(true);
  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/`);
        console.log("checking server health");
        if (res.status === 200) {
          setHealth(true);
          setHelthChecking(false);
          return;
        }
        setHealth(true);
      } catch (error) {
        toast.error("server side error");
        setHealth(false);
      }
    }
    checkHealth();
  }, []);
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
        {healthChecking && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button disabled>Sign In</Button>
              </TooltipTrigger>
              <TooltipContent>
                <Button className="" variant={"outline"}>
                  Server are busy
                </Button>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {isHealth && (
          <>
            <div className="hidden md:flex">
              {isLoading && <Loader2 className="animate-spin" />}
              {!isVerified && !isLoading && <SignIn />}
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
          </>
        )}
      </Menubar>
    </div>
  );
};
export default Nav;
