"use client";

import { ExpenseData } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export type HistogramBlockProps = {
  className?: string;
  data: ExpenseData[];
};

function maxAmount(data: ExpenseData[]): number {
  return data.reduce((max, { amount }) => Math.max(max, amount), 0);
}

export default function HistogramBlock(props: HistogramBlockProps) {
  const { className, data } = props;

  const max = maxAmount(data);
  return (
    <div className={cn("flex flex-col pt-[34px] md:pt-[48px]", className)}>
      <div className="flex grow items-end justify-between">
        {data.map((d, i) => {
          return (
            <div
              key={d.day}
              className="flex h-full w-[33px] shrink-0 flex-col items-center justify-end overflow-visible md:w-[50.36px]"
            >
              <Bar
                amount={d.amount}
                max={max}
                className="peer order-1 mt-[8px] shrink-0 self-stretch"
              />
              <span className="invisible h-[40px] rounded-[5px] bg-dark-brown p-[8px] text-[18px] font-bold leading-[23px] text-card-white peer-hover:visible">
                ${d.amount}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        {data.map((d) => {
          return (
            <span
              key={d.day}
              className="mt-[8px] w-[33px] text-center text-[12px] leading-[16px] text-medium-brown md:w-[50.36px] md:text-[14px]"
            >
              {d.day}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Bar({
  className,
  amount,
  max,
}: {
  className?: string;
  amount: number;
  max: number;
}) {
  const bgClass = {
    "bg-red": amount !== max,
    "hover:bg-[#FF9B86]": amount !== max,

    "bg-cyan": amount === max,
    "hover:bg-[#B4E0E5]": amount === max,
  };

  return (
    <div
      className={cn("rounded-[3px] md:rounded-[5px]", bgClass, className)}
      style={{ height: `${(amount / max) * 100}%` }}
    />
  );
}
