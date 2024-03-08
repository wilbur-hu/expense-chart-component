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
      <div className="mt-[16px] flex flex-col rounded-[20px] bg-card-white px-[20px] md:mt-[24px] md:px-[40px]">
        <h2 className="mt-[32px] text-[24px] font-bold leading-[31px] text-dark-brown md:text-[32px] md:leading-[42px]">
          Spending - Last 7 days
        </h2>
        <HistogramBlock data={dataJson} className="mt-[18px] h-[226px]" />
        <hr className="bg-light-brown mt-[24px] h-[2px] rounded-[1px] md:mt-[32px]" />

        <div className="mb-[24px] mt-[24px] flex items-end justify-between md:mb-[40px] md:mt-[32px]">
          <div className="flex flex-col">
            <p className="text-[15px] leading-[20px] text-medium-brown md:text-[18px] md:leading-[23px]">
              Total this month
            </p>
            <h2 className="text-[30px] font-bold leading-[39px] text-dark-brown md:text-[48px] md:leading-[62px]">
              $478.33
            </h2>
          </div>
          <div className="mb-[9px]">
            <h3 className="text-right text-[15px] font-bold leading-[20px] text-dark-brown md:text-[18px] md:leading-[23px]">
              +2.4%
            </h3>
            <p className="text-right text-[15px] leading-[20px] text-medium-brown md:text-[18px] md:leading-[23px]">
              from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
