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
      <div className="mt-[24px] flex flex-col rounded-[20px] bg-card-white px-[40px]">
        <h2 className="mt-[32px] text-[32px] font-bold leading-[42px] text-dark-brown">
          Spending - Last 7 days
        </h2>
        <HistogramBlock data={dataJson} className="mt-[18px] h-[226px]" />
        <hr className="bg-light-brown mt-[32px] h-[2px] rounded-[1px]" />

        <div className="mb-[40px] mt-[32px] flex items-end justify-between">
          <div className="flex flex-col">
            <p className="text-[18px] leading-[23px] text-medium-brown">
              Total this month
            </p>
            <h2 className="text-[48px] font-bold leading-[62px] text-dark-brown">
              $478.33
            </h2>
          </div>
          <div className="mb-[9px]">
            <h3 className="text-right text-[18px] font-bold leading-[23px] text-dark-brown">
              +2.4%
            </h3>
            <p className="text-right text-[18px] leading-[23px] text-medium-brown">
              from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
