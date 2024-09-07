import { Clock10, Mail, MonitorCogIcon, Verified } from "lucide-react";
import HeroCards from "./ui/HeroCards";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";
// import { Button } from "./ui/button";
// import { useNavigate } from "react-router-dom";
// import useUserStore from "@/hooks/useUserStore";
const iterator = [
  {
    title: "TRUSTABLE",
    child: <Verified />,
    desc: "THE CIRCULARS ARE DIRECTLY SCRAPED FROM THE WEB THEREFORE IT IS 100% VERIFIED",
  },
  {
    title: "LOW LATENCY",
    child: <Clock10 />,
    desc: "SEAMLESS DATA INTEGRATED ARCHITECTURE FACILATES LOW LATENCY MAILING SYSTEM",
  },
  {
    title: "MONITERED",
    child: <MonitorCogIcon />,
    desc: "THE SITE IS MONITERED EVERY 30MINS, daily 48 checks every check is validated and parsed",
  },
  {
    title: "MAIL INTEGRATED",
    child: <Mail />,
    desc: "As soon as the web has updated subscribed user will get the regaurding mail",
  },
];
const Hero = () => {
  // const navigate = useNavigate();
  // const { isVerified } = useUserStore();

  return (
    <div>
      <div className="p-8 w-full min-h-screen flex flex-col items-center space-y-8">
        <div className="flex justify-center items-center">
          <p className="font-semibold text-xl md:text-3xl ">
            LOW LATENCY NOTIFICATIONS STRAIGHT FROM{" "}
            <span className="text-yellow-500">VTU </span>
            WEB
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 ">
          {iterator.map((i, index) => {
            return (
              <HeroCards title={i.title} desc={i.desc} key={index}>
                {i.child}
              </HeroCards>
            );
          })}
        </div>
        {/* {isVerified && (
          <Button
            onClick={() => {
              navigate("latest");
            }}
          >
            LATEST CIRCULAR
          </Button>
        )} */}
      </div>
    </div>
  );
};
export default Hero;
