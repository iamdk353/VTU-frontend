import { Button } from "./ui/button";
import useUserStore from "@/hooks/useUserStore";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";
const Logout = () => {
  const { logout } = useAuth0();
  const { isVerified } = useUserStore();
  if (isVerified) {
    return (
      <Button
        className="w-full"
        variant={"destructive"}
        onClick={() => {
          toast.dismiss("Loging out");
          logout({ logoutParams: { returnTo: window.location.origin } });
        }}
      >
        Logout
      </Button>
    );
  }
};
export default Logout;
