import React from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const Card = () => {
  return (
    <div
      className={
        "p-6 flex space-y-5 flex-col border border-black/30 rounded-lg max-w-sm shadow-md hover:scale-105 transition"
      }
    >
      <div className={"w-40"}>
        <Button className={"bg-[#DE8E45] rounded-sm"} size={"sm"}>
          Package 1
        </Button>
      </div>

      <p className={"text-sm"}>
        Lorem Ipsum is simply dummy text of the the I printing and type
        industry.
      </p>
      <div className={"space-y-1"}>
        <div className={"flex items-center space-x-2"}>
          <div className={"relative h-5 w-5"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>Lorem Ipsum is simply dummy text.</span>
        </div>
        <div className={"flex items-center space-x-2"}>
          <div className={"relative h-5 w-5"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>Lorem Ipsum is simply dummy text.</span>
        </div>
        <div className={"flex items-center space-x-2"}>
          <div className={"relative h-5 w-5"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>Lorem Ipsum is simply dummy text.</span>
        </div>
        <div className={"flex items-center space-x-2"}>
          <div className={"relative h-5 w-5"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>Lorem Ipsum is simply dummy text.</span>
        </div>
        <div className={"flex items-center space-x-2"}>
          <div className={"relative h-5 w-5"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>Lorem Ipsum is simply dummy text.</span>
        </div>
      </div>
      <Button className={"bg-new-sky text-base rounded-sm text-white"}>
        Get Started
      </Button>
    </div>
  );
};

export default Card;
