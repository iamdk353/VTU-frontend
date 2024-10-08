import { Clock10, Mail, MonitorCogIcon, Unlink, Verified } from "lucide-react";
import HeroCards from "./ui/HeroCards";

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
  {
    title: "ONE TIME SUBSCRIBE",
    child: <div className="font-bold text-lg">1</div>,
    desc: "Sign up once and subscribe for the service",
  },
  {
    title: "DISABLE ANY-TIME",
    child: <Unlink></Unlink>,
    desc: "to disable the service update your profile info, uncheck the recive notifications",
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
