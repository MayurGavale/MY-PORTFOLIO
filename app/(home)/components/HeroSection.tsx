import React from "react";
import Link from "next/link";

import { GlobeDemo } from "./globe";
import { LampDemo } from "./Lamp";
import { SparklesPreview } from "./Sparkles";
import { TextGenerateEffectDemo } from "./TextGenerator";
import { MovingBorderDemo } from "./MovingBorder";
import Title from "./Title";

export default function HeroSection() {
  return (
    <>
      <div className="  flex items-center justify-center">
        <div className="space-y-10 flex flex-col items-center">
          <h1 className="text-4xl lg:text-5xl font-bold items-center ">
            Nice to Meet You Mate! 👨🏻‍💻 <br />
            <span className="underline underline-offset-8 decoration-blue-500">
              {"<div> I'm Mayur < / div>"}
            </span>
          </h1>
          <span>
            <TextGenerateEffectDemo />
          </span>
          <Link
            href={
              "https://drive.google.com/file/d/1BomDNZlaYTFo-LVV5y6uhJSl8u2tEqVW/view"
            }
            className="inline-block"
          >
            <Title text="Resume📑" className={""} />
          </Link>
        </div>
      </div >
      <SparklesPreview />
      {/* <div className="items-center justify-center">
        <MovingBorderDemo />
      </div> */}
      <div className="flex">
        <GlobeDemo />
      </div>
    </>
  );
}
