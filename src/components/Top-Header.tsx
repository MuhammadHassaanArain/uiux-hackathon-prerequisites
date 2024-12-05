import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function TopHeader() {
  return (
    <main className="h-[80px] sm:h-[48px] sm:flex items-center justify-around  bg-black text-white ">
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery OFF 50%!{"  "}
        <span className="font-bold underline">ShopNow</span>
      </p>
      <p className="flex items-center">
        English
        <MdOutlineKeyboardArrowDown className="font-bold text-2xl" />
      </p>
    </main>
  );
};