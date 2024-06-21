"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I'm a Full Stack Developer based in Mumbai with a passion for building creative and user-friendly web applications. I enjoy working on both the front-end and back-end to bring ideas to life.`

export function TextGenerateEffectDemo() {
  return  <>
  
  <TextGenerateEffect words={words} />;
  </>
}
