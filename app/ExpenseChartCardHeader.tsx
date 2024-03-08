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
      <header className="flex items-center justify-between rounded-[20px] bg-red">
        <div className="mb-[25px] ml-[32px] mt-[27px] flex flex-col">
          <p className="text-[15px] leading-[20px] text-white md:text-[18px] md:leading-[23px]">
            My balance
          </p>
          <p className="mt-[4px] text-[24px] font-bold leading-[31px]  text-card-white md:mt-[8px] md:text-[32px] md:leading-[42px]">
            $921.48
          </p>
        </div>
        <Image
          src={logo}
          alt="logo"
          className="mr-[24px] h-[40px] md:mr-[39px] md:h-[48px]"
        />
      </header>
    </section>
  );
}
