import { Menubar } from "@radix-ui/react-menubar";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <Menubar className="px-7 h-20 flex justify-between bg-black items-center flex-row-reverse">
      <Button variant={"link"} className="text-xl text-white">
        VTU NOTIFY
      </Button>
    </Menubar>
  );
};
export default Footer;
