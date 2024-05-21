"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


const LikeCounter = () => {
  const { likeCount } = useSelector((state: RootState) => state.like);

  return (
          <Badge className="bg-regal-blue w-[25px] h-[25px] flex items-center justify-center">{likeCount}</Badge>
  );
};

export default LikeCounter;
