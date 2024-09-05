import axios from "axios";
import { toast } from "sonner";
async function createUser({
  email,
  authId,
  image,
  name,
}: {
  email: string | undefined;
  authId: string | undefined;
  image: string;
  name: string;
}) {
  if (!email || !authId) return;
  try {
    const data = await axios.post(`${import.meta.env.VITE_BASEURL}/user`, {
      email,
      authId,
      image,
      name,
    });
    return data.data;
  } catch (error) {
    toast.error("Error in creating user");
    return;
  }
}
export default createUser;
