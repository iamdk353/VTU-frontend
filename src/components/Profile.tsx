// import { useform } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios, { AxiosResponse } from "axios";
import useAuthHeader from "@/hooks/useAuthHeader";
import useUserStore from "@/hooks/useUserStore";
import Loading from "./ui/loading";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Profile = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { image } = useUserStore();
  const [Name, setName] = useState("");
  const [Notify, setNotify] = useState(false);
  const [load, setLoad] = useState(true);
  const [email, setEmail] = useState("");
  const [id, setid] = useState("");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    async function getUser() {
      try {
        const token = await getAccessTokenSilently();
        const res = await axios.get<
          string,
          AxiosResponse<{
            notify: boolean;
            name: string;
            _id: string;
            email: string;
          }>
        >(`${import.meta.env.VITE_BASEURL}/user/whoim`, useAuthHeader(token));
        // console.log("response ", res.data);
        setName(res.data.name);
        setNotify(res.data.notify);
        setid(res.data._id);
        setEmail(res.data.email);
        setLoad(false);
      } catch (error) {
        // console.log(error);
        setLoad(false);
      }
    }
    getUser();
  }, []);
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {load ? (
        <Loading />
      ) : (
        <form
          className=" w-[80%] md:w-[40%] p-5 mx-auto shadow-md h-full space-y-5 flex flex-col items-center "
          onSubmit={async (e) => {
            const token = await getAccessTokenSilently();
            e.preventDefault();
            // console.log(Name, Notify, id);
            try {
              const res = await axios.patch(
                `${import.meta.env.VITE_BASEURL}/user/${id}`,
                { name: Name, notify: Notify },
                useAuthHeader(token)
              );
              // console.log("profile response ", res);
              if (res.status === 200) {
                toast.success("Updated Profile");
              }
            } catch (error) {
              // console.log("error  ");
            }
          }}
        >
          <p className="font-semibold text-2xl text-center">USER PROFILE</p>
          <Avatar className="mx-auto size-16">
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Input
            placeholder="Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
              setSubmit(true);
            }}
          ></Input>
          <Input
            placeholder="Email"
            readOnly
            value={email}
            className="cursor-not-allowed"
          ></Input>
          <div className="flex items-center space-x-2 ">
            <Checkbox
              id="terms"
              checked={Notify}
              onCheckedChange={(e) => {
                setNotify(e as boolean);
                setSubmit(true);
                // console.log(submit);
              }}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Recive Notfications
            </label>
          </div>
          {submit && <Button>Submit</Button>}
          {!submit && <Button disabled={true}>Submit</Button>}
        </form>
      )}
    </div>
  );
};
export default Profile;
