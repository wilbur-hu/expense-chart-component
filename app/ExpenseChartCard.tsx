import dataJson from "@/lib/data.json";
import React from "react";
import ExpenseChartCardHeader from "@/app/ExpenseChartCardHeader";
import HistogramBlock from "@/app/HistogramBlock";

export type ExpenseChartCardProps = {
  className?: string;
};

export default function ExpenseChartCard(props: ExpenseChartCardProps) {
  return (
    <div className="flex flex-col items-stretch">
      <ExpenseChartCardHeader />
      <div className="flex flex-col rounded-[20px] bg-card-white px-[40px]">
        <h2 className="mt-[32px] text-[32px] font-bold leading-[42px] text-dark-brown">
          Spending - Last 7 days
        </h2>
        <HistogramBlock
          data={dataJson}
          className="self-s mt-[18px] h-[226px]"
        />
      </div>
    </div>
  );
}
