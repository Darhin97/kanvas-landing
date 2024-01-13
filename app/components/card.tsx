import React from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface CardProps {
  data: {
    name: string;
    description: string;
    info: {
      t1: string;
      t2: string;
      t3?: string;
      t4?: string;
      t5?: string;
    };
  };
  index: number;
}
const Card = ({ data, index }: CardProps) => {
  return (
    <div
      className={
        "p-6 flex space-y-5 flex-col border border-black/30 rounded-lg max-w-sm shadow-md hover:scale-105 transition min-h-[385px]"
      }
    >
      <div className={"w-40"}>
        <Button
          className={`${index === 0 ? "bg-[#6F5740]" : ""} ${
            index === 1 ? "bg-[#7E7E7E]" : ""
          } ${index === 2 ? "bg-[#BA9200]" : ""} text-white  rounded-sm`}
          size={"sm"}
        >
          {data?.name}
        </Button>
      </div>

      <p className={"text-sm"}>{data?.description}</p>
      <div className={"space-y-1 grow flex flex-col"}>
        <div className={"flex items-start  space-x-2"}>
          <div className={"relative h-5 w-5 shrink-0"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>{data?.info?.t1}</span>
        </div>
        <div className={"flex items-start  space-x-2"}>
          <div className={"relative h-5 w-5 shrink-0"}>
            <Image
              src={"/assets/check.svg"}
              alt={"check icon"}
              fill
              className={"h-5"}
            />
          </div>
          <span>{data?.info?.t2}</span>
        </div>
        {data?.info?.t3 && (
          <div className={"flex items-start  space-x-2"}>
            <div className={"relative h-5 w-5 shrink-0"}>
              <Image
                src={"/assets/check.svg"}
                alt={"check icon"}
                fill
                className={"h-5"}
              />
            </div>
            <span>{data?.info?.t3}</span>
          </div>
        )}
        {data?.info?.t4 && (
          <div className={"flex items-start  space-x-2"}>
            <div className={"relative h-5 w-5 shrink-0"}>
              <Image
                src={"/assets/check.svg"}
                alt={"check icon"}
                fill
                className={"h-5"}
              />
            </div>
            <span>{data?.info?.t4}</span>
          </div>
        )}
        {data?.info?.t5 && (
          <div className={"flex items-start  space-x-2"}>
            <div className={"relative h-5 w-5 shrink-0"}>
              <Image
                src={"/assets/check.svg"}
                alt={"check icon"}
                fill
                className={"h-5"}
              />
            </div>
            <span>{data?.info?.t5}</span>
          </div>
        )}
      </div>
      <div className={"mt-auto w-full"}>
        <Button
          className={"bg-new-sky text-base rounded-sm text-white w-full "}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Card;
