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
import { Menu } from "lucide-react";
import SignIn from "../signIn";
const MobileSignin = () => {
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
            <SheetTitle>Sign in to get started</SheetTitle>
            <SignIn />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileSignin;
