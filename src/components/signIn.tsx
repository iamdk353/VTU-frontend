import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Sign In
    </Button>
  );
};
export default SignIn;
