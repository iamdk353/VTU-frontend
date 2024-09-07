import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const SignIn = ({ onclick }: { onclick?: () => void | undefined }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      className="w-full"
      onClick={() => {
        if (onclick) {
          onclick();
        }
        loginWithRedirect();
      }}
    >
      Sign In
    </Button>
  );
};
export default SignIn;
