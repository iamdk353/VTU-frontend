import createUser from "@/DBCalls/postUser";
import { setImage, setIsLogin, setIsVerified } from "@/slices/userSlice";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "VTU Notify",
      }}
      onRedirectCallback={async (_state?: AppState, user?: User) => {
        try {
          const data = await createUser({
            email: user?.email,
            authId: user?.sub,
            image: user?.picture as string,
            name: user?.given_name as string,
          });
          console.log(data.msg);
          dispatch(setImage(data.msg.image));
          dispatch(setIsLogin(true));
          dispatch(setIsVerified(true));
        } catch (error) {
          console.log("error");
        }
      }}
    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProvider;
