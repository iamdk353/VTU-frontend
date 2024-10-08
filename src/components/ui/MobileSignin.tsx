import { Button } from "@/components/ui/button";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useUserStore from "@/hooks/useUserStore";
import { Home, Loader, Menu } from "lucide-react";
import SignIn from "../signIn";
import Logout from "../Logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const MobileSignin = () => {
  const { isVerified, isLoading } = useUserStore();
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" onClick={() => setOpen(!open)}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetOverlay>
          <SheetContent className="space-y-5">
            <SheetHeader>
              {!isVerified && <SheetTitle>Sign in to get started</SheetTitle>}
              {isVerified && (
                <SheetTitle className="text-left">
                  <Home
                    onClick={() => {
                      setOpen(!open);
                      navigate("/");
                    }}
                  />
                </SheetTitle>
              )}
            </SheetHeader>
            {isLoading && <Loader className="animate-spin mx-auto"></Loader>}
            {isVerified && !isLoading ? (
              <>
                <Button
                  className="w-full"
                  onClick={() => {
                    setOpen(!open);
                    navigate("profile");
                  }}
                >
                  PROFILE
                </Button>
                <Logout />
              </>
            ) : (
              !isLoading && (
                <SignIn
                  onclick={() => {
                    setOpen(!open);
                  }}
                />
              )
            )}
          </SheetContent>
        </SheetOverlay>
      </Sheet>
    </div>
  );
};
export default MobileSignin;
