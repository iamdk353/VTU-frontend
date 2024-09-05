import React from "react";
import { Card, CardDescription, CardHeader } from "./card";
interface props {
  title: string;
  children: React.ReactNode;
  desc: string;
}
const HeroCards = ({ title, desc, children }: props) => {
  return (
    <Card className="p-3 hover:scale-105 transition-all shadow-md cursor-default  ">
      <CardHeader>
        <p className="font-bold flex justify-between">
          {title}
          {children}
        </p>
      </CardHeader>
      <CardDescription className="capitalize">
        {desc.toUpperCase()}
      </CardDescription>
    </Card>
  );
};
export default HeroCards;
