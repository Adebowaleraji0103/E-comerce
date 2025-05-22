import Card from "./Card";
import { FaShippingFast } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";

const cardInfo = [
  {
    title: "Free Shipping",
    icon: <FaShippingFast />,
  },

  {
    title: "Service",
    icon: <LuTimerReset />,
  },

  {
    title: "Money Return",
    icon: <GiReceiveMoney />,
  },
];

export default function CardRow() {
  return (
    <div className="flex justify-evenly py-10">
      {cardInfo.map((info) => (
        <Card title ={info.title}>
            {info.icon}
            </Card>
      ))}
    </div>
  );
}
