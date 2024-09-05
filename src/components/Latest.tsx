import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./ui/loading";

const Latest = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    async function Status() {
      setLoad(true); // Set loading to true before fetching the token
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false); // Stop loading regardless of success or failure
      }
    }
    Status();
  }, [getAccessTokenSilently]); // Add `getAccessTokenSilently` to the dependency array

  return (
    <div>
      <div className="w-full p-4 min-h-screen">
        {load ? <Loading /> : <p>Token: {token}</p>}
      </div>
    </div>
  );
};

export default Latest;
