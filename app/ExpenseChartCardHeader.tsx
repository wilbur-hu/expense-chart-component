import Image from "next/image";
import logo from "@/public/images/logo.svg";

export type ExpenseChartCardHeaderProps = {
  className?: string;
};

export default function ExpenseChartCardHeader(
  props: ExpenseChartCardHeaderProps,
) {
  return (
    <section>
      <header className="flex justify-between rounded-[20px] bg-red">
        <div className="mb-[25px] ml-[32px] mt-[27px] flex flex-col">
          <p className="text-[18px] leading-[23px] text-white">My balance</p>
          <p className="mt-[8px] text-[32px] font-bold leading-[42px] text-card-white">
            $921.48
          </p>
        </div>
        <Image src={logo} alt="logo" className="mr-[39px]" />
      </header>
    </section>
  );
}
