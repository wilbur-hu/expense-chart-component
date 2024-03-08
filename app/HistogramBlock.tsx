"use client";

import { ExpenseData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export type HistogramBlockProps = {
  className?: string;
  data: ExpenseData[];
};

function maxAmount(data: ExpenseData[]): number {
  return data.reduce((max, { amount }) => Math.max(max, amount), 0);
}

export default function HistogramBlock(props: HistogramBlockProps) {
  const { className, data } = props;

  const amounts = useRef(new Array(props.data.length));
  const barContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const oldPaddingTop = barContainer.current!.style.paddingTop;

    barContainer.current!.style.paddingTop =
      amounts.current[0].offsetHeight + "px";
  });

  const max = maxAmount(data);
  return (
    <div className={cn("flex flex-col", className)}>
      <div
        className="flex h-full grow items-end justify-between"
        ref={barContainer}
      >
        {data.map((d, i) => {
          return (
            <div
              key={d.day}
              className="flex h-full w-[50.36px] shrink-0 flex-col items-center justify-end overflow-visible"
            >
              <Bar
                amount={d.amount}
                max={max}
                className="peer order-1 mt-[8px] shrink-0 self-stretch"
              />
              <span
                className="invisible rounded-[5px] bg-dark-brown p-[8px] text-[18px] font-bold leading-[23px] text-card-white peer-hover:visible"
                ref={(node) => {
                  amounts.current[i] = node;
                }}
              >
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
              className="w-[50.36px] text-center text-[14px] text-dark-brown"
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
      className={cn("rounded-[5px]", bgClass, className)}
      style={{ height: `${(amount / max) * 100}%` }}
    />
  );
}
