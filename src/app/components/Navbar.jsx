"use client";
import { House, Clock10, ChartArea } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-full mx-auto lg:w-9/12 md:w-10/12 flex justify-between">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-center shadow"
            >
                <Link
                  href="/"
                  className={`btn btn-ghost
                    ${
                      pathname === "/"
                        ? "btn flex items-center btn-accent btn-outline"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center justify-center gap-1">
                    <House></House>
                    <button>Home</button>
                  </div>
                </Link>
                <Link
                  href="/timeline"
                  className={`btn btn-ghost
                    ${
                      pathname === "/timeline"
                        ? "btn flex items-center btn-accent btn-outline"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Clock10></Clock10>
                    <button>Timeline</button>
                  </div>
                </Link>

                <Link
                  href="stats"
                  className={`btn btn-ghost
                    ${
                      pathname === "/stats"
                        ? "btn flex items-center btn-accent btn-outline"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center justify-center gap-1">
                    <ChartArea></ChartArea>
                    <button>Stats</button>
                  </div>
                </Link>
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost text-xl">
            Keen<span className="text-green-800">Keeper</span>
          </Link>
        </div>

        <div className=" md:hidden hidden lg:flex gap-5">
            <Link
              href="/"
              className={`btn btn-ghost
                    ${
                      pathname === "/"
                        ? "btn flex items-center btn-accent btn-outline"
                        : ""
                    }
                  `}
            >
              <div className="flex items-center justify-center gap-1">
                <House></House>
                <button>Home</button>
              </div>
            </Link>
            <Link
              href="/timeline"
              className={`btn btn-ghost
                    ${
                      pathname === "/timeline"
                        ? "btn flex items-center btn-accent btn-outline"
                        : ""
                    }
                  `}
            >
              <div className="flex items-center justify-center gap-1">
                <Clock10></Clock10>
                <button>Timeline</button>
              </div>
            </Link>

            <Link
              href="stats"
              className={`btn btn-ghost
                    ${
                      pathname === "/stats"
                        ? "btn flex items-center btn-accent btn-outline"
                        : ""
                    }
                  `}
            >
              <div className="flex items-center justify-center gap-1">
                <ChartArea></ChartArea>
                <button>Stats</button>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
