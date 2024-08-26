import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  const linkClass = "hover:text-pink-600 text-sm";
  return (
    <header className="w-full">
      <div className="flex items-center justify-between py-6 c-container">
        <Link href={"/"}>
          <div className="text-xl font-bold text-white">DEFIHOOK</div>
        </Link>
        <nav>
          <ul className="flex items-center gap-8 capitalize">
            {/* <li className={linkClass}>
              <Link
                href={"https://www.spmoe.xyz/jameskano-resume.pdf"}
                target="_blank"
              >
                <span>resume</span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
