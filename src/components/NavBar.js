import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useStore from "@/store/useStore";
import { useRouter } from "next/router";
import Link from "next/link";
const NavBar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  //cannot directly use server-rendered value i.e userinfo.email cant be directly stored because server-rendered and client-rendered  doesn't match so storing userinfo.email in temp email
  const [tempEmail, setTempEmail] = useState();

  const { userInfo, setUserInfo } = useStore();
  useEffect(() => {
    setTempEmail(userInfo.email);
  }, [userInfo]);

  const handleLogout = () => {
    setUserInfo("");
    router.push("/");
  };

  const toggleMenu = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="px-5 md:px-20 py-4  bg-[#1E293B] text-[#CBD5E1] opacity-95 sticky top-0 z-10">
        <div className="flex flex-row justify-between items-center relative">
          <div className="uppercase text-lg font-medium text-[#3B82F6]">
            <Link href="/"> NextShop</Link>
          </div>
          <div className="block md:hidden text-[#CBD5E1] cursor-pointer">
            <AiOutlineMenu onClick={toggleMenu} size={25} />
          </div>

          <div className="md:flex md:flex-row md:items-center md:gap-10 hidden ">
            {tempEmail && (
              <>
                <Link className="hover:text-[#F8FAFC]" href="/products">
                  Product
                </Link>
                <Link
                  className="hover:text-[#F8FAFC]"
                  href="/products/category"
                >
                  Product category
                </Link>
                <Link className="hover:text-[#F8FAFC]" href="/dashboard">
                  Dashboard
                </Link>
                <p className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </p>
              </>
            )}

            <p className="text-[#3B82F6]">{tempEmail}</p>
          </div>
          {menuOpen && (
            <div className="md:hidden flex flex-col absolute right-[0px] top-[2.2rem] bottom-0 left-0 h-fit pb-4 bg-[#1E293B] text-[#CBD5E1] ">
              <div
                className="flex flex-row-reverse cursor-pointer"
                onClick={toggleMenu}
              >
                <AiOutlineClose size={25} />
              </div>
              <div className="flex flex-col items-center gap-4">
                {tempEmail && (
                  <>
                    <Link
                      className="hover:text-[#F8FAFC] hover:scale-105"
                      href="/products"
                    >
                      Product
                    </Link>
                    <Link
                      className="hover:text-[#F8FAFC] hover:scale-105"
                      href="/products/category"
                    >
                      Product category
                    </Link>
                    <Link
                      className="hover:text-[#F8FAFC] hover:scale-105"
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                    <p
                      className="hover:text-[#F8FAFC] hover:scale-105 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </>
                )}
                <p className="text-[#3B82F6] " href="/dashboard">
                  {tempEmail}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
