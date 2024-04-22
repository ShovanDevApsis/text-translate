"use client";

import { ArrowLeftRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { translateText } from "../services/services";
import { useToast } from "@/components/ui/use-toast";

interface TranslatorProps {}

const languageData = [
  "bangla",
  "arabic",
  "english",
  "french",
  "spanish",
  "chinese",
  "japanese",
  "hindi",
  "korean",
  "russian",
  "german",
];

const Translator: React.FC<TranslatorProps> = ({}) => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [isMounted, setisMounted] = useState(false);
  const [source, setsource] = useState("");
  const [target, settarget] = useState("");
  const [textMessage, settextMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleToast = (mssg: string) => {
    toast({
      title: "Error",
      description: mssg,
    });
  };

  const handleTranslate = () => {
    if (!textMessage || !source || !target) {
      return handleToast("Fields missing!");
    }

    setisLoading(true);

    const body = {
      source: source,
      target: target,
      text: textMessage,
    };

    translateText(body)
      .then((res) => {
        if (res) {
          setisLoading(false);
        } else {
          setisLoading(false);
          return handleToast("Something went wrong!");
        }
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
        return handleToast("Something went wrong!");
      });
  };

  return (
    <div className="flex flex-col shadow-2xl p-4 rounded-2xl dark:bg-[#25272b] ">
      {/* Header */}
      <div className="relative">
        {theme === "dark" && (
          <img
            src="/head-dark.svg"
            alt="head"
          />
        )}
        {theme === "light" && (
          <img
            src="/head.svg"
            alt="head"
          />
        )}

        <Avatar className="absolute top-0 left-[48%] h-7 w-7 md:h-12 md:w-12">
          <AvatarFallback>
            <div className="bg-blue-400 dark:bg-[#3c3e42]  h-full w-full flex items-center justify-center">
              <ArrowLeftRight className=" text-white" />
            </div>
          </AvatarFallback>
        </Avatar>

        {/* From Select */}
        <div className="absolute left-10 top-7 h-full">
          <Select onValueChange={(e) => setsource(e)}>
            <SelectTrigger className="w-[25vw]">
              <SelectValue placeholder="Select input language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                {languageData.map((curData) => (
                  <SelectItem
                    key={curData}
                    value={curData}>
                    {curData.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* To Select */}
        <div className="absolute right-10 top-7">
          <Select onValueChange={(e) => settarget(e)}>
            <SelectTrigger className="w-[25vw]">
              <SelectValue placeholder="Select output language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                {languageData.map((curData) => (
                  <SelectItem
                    key={curData}
                    value={curData}>
                    {curData.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Body */}
      <div className="flex items-center justify-between gap-3 px-2">
        {/* Card left */}
        <div className="h-[50vh] w-[50%] shadow-lg rounded-lg p-3">
          <Textarea
            placeholder="Enter text..."
            className="bg-zinc-200/90 px-4 py-6 h-full text-3xl
                  dark:bg-zinc-700/75 focus-visible:ring-offset-0
                  focus-visible:ring-0 text-zinc-600 dark:text-zinc-200 resize-none
                  "
            onChange={(e) => settextMessage(e.target.value)}
          />
        </div>
        {/* Card right */}
        <div className="h-[50vh] w-[50%] shadow-lg rounded-lg p-3">
          <div
            className="bg-zinc-200/90 px-4 py-6 h-full
                  dark:bg-zinc-700/75 focus-visible:ring-offset-0
                  focus-visible:ring-0 text-zinc-600 dark:text-zinc-200 resize-none
                  ">
            {isLoading && (
              <div className="flex space-x-2 justify-center items-center dark:invert">
                <span className="sr-only">Loading...</span>
                <div className="h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-4 w-4 bg-slate-600 rounded-full animate-bounce"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="w-full flex items-center justify-center mt-3">
        <button
          disabled={isLoading}
          onClick={handleTranslate}
          className={`bg-blue-500 dark:bg-[#393b3f]  text-white p-3
          rounded-full shadow-sm w-[50%] ${
            isLoading && "bg-zinc-600"
          }`}>
          Translate
        </button>
      </div>
    </div>
  );
};

export default Translator;
