import Calculator from "./CalculatorDev";
import Link from "next/link";

const CalcHome = () => {
  return (
    <div>
      <Link href="/">Back to hompage</Link>
      <Calculator />
    </div>
  );
};

export default CalcHome;
