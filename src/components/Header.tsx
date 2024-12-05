import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartDuotone } from "react-icons/pi";
export default function Header() {
  return (
    <div className="text-black">
      <main className="lg:flex justify-evenly items-center">
        <h2 className="font-bold text-2xl text-center ">Exclusive</h2>
        <nav className="h-[24px] flex justify-evenly lg:w-2/6  ">
          <Link href={"/"} className="hover:border-b border-gray-500">
            Home
          </Link>
          <Link href={"/"} className="hover:border-b border-gray-500">Contact</Link>
          <Link href={"/"} className="hover:border-b border-gray-500">About</Link>
          <Link href={"/"} className="hover:border-b border-gray-500">Sign Up</Link>
        </nav>

        <div className=" h-[38px] flex my-3  w-2/6">
          <section className=" h-[38px] bg-gray-200 w-9/12  rounded-sm ">
            <div className=" h-[32px] text-gray-400 flex justify-around items-center">
              What are you looking for?
              <IoSearch className="text-black text-2xl" />
            </div>
          </section>
          <div className=" h-[32px] flex  justify-evenly items-center w-3/12  text-black">
            <FaRegHeart className="text-xl" />
            <PiShoppingCartDuotone className="text-xl" />
          </div>
        </div>
      </main>
    </div>
  );
}
