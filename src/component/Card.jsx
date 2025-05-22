import { FaShippingFast } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";

export default function Card({ title, children }) {
  return (
    <div className="flex flex-col items-center w-[300px] p-6 text-center gap-3">
      <div className="text-4xl">{children}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="">Lorem ipsum dolor sit met adipisicing elite </p>
    </div>
    
  );
}