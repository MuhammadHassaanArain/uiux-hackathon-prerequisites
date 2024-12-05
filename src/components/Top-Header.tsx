import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function TopHeader() {
  return (
    <main className="w-[1440px] h-[48] bg-black text-white flex justify-evenly">
      <div className="w-[859px] h-[24px]  flex justify-between ml-[400px]">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          {""}
          <span className="font-bold underline"> ShopNow</span>
        </p>
        <p className="flex items-center">
          English
          <MdOutlineKeyboardArrowDown className="font-bold text-2xl" />
        </p>
      </div>
    </main>
  );
};
