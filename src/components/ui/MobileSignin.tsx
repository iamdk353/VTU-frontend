import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useUserStore from "@/hooks/useUserStore";
import { Menu } from "lucide-react";
import SignIn from "../signIn";
import Logout from "../Logout";
import { useNavigate } from "react-router-dom";
const MobileSignin = () => {
  const { isVerified } = useUserStore();
  const navigate = useNavigate();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="space-y-5">
          <SheetHeader>
            {!isVerified && <SheetTitle>Sign in to get started</SheetTitle>}
            {isVerified && (
              <SheetTitle className="text-left">HELLO {}</SheetTitle>
            )}
          </SheetHeader>
          {isVerified ? (
            <>
              <Button
                className="w-full"
                onClick={() => {
                  navigate("profile");
                }}
              >
                PROFILE
              </Button>
              <Logout />
            </>
          ) : (
            <SignIn />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileSignin;
