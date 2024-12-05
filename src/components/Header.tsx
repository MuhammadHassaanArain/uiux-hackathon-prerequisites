import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartDuotone } from "react-icons/pi";
export default function Header() {
  return (
    <div className="flex justify-center ">
      <main className="w-[1170px]  bg-white h-[38px] flex items-center justify-between my-6">
        <div className="text-black flex justify-between items-center w-[675px] h-[24px]">
          <h2 className="font-bold text-[25px]">Exclusive</h2>
          <nav className="flex w-[367px]  h-[24px] justify-between">
            <Link href={"/"} className="border-b border-gray-500">
              Home
            </Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Sign Up</Link>
          </nav>
        </div>
        <div className="w-[347px] h-[38px] flex justify-between items-center">
          <section className="w-[243px] h-[38px] bg-gray-200 flex items-center justify-center rounded-sm">
            <div className="w-[211px] h-[24px] text-gray-400 flex justify-between ">
              What are you looking for?
              <IoSearch className="text-black text-2xl" />
            </div>
          </section>
          <div className="w-[80px] h-[32px]  flex justify-between items-center text-black">
            <FaRegHeart className="text-2xl" />
            <PiShoppingCartDuotone className="text-2xl" />
          </div>
        </div>
      </main>
    </div>
  );
}
