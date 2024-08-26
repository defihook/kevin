import { FC } from "react";
import {
  NextjsIcon,
  ReactIcon,
  VueIcon,
  NuxtjsIcon,
  EthereumIcon,
  SolanaIcon,
  RustIcon,
  SolidityIcon,
  Web3Icon,
  BootstrapIcon,
  TailwindIcon,
  FigmaIcon,
  GoIcon,
  Bitcoin,
  Ton,
} from "./Icons";

const SkillsBox: FC = () => {
  return (
    <section className="my-5 c-container">
      <h2 className="mb-3 font-bold text-m text-dark/80">{"</> "}Skills</h2>
      <div className="flex flex-wrap">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Ethereum"
        >
          <EthereumIcon />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Solana"
        >
          <SolanaIcon />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Solana"
        >
          <Bitcoin />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Solana"
        >
          <Ton />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Rust"
        >
          <RustIcon />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Go lang"
        >
          <GoIcon />
        </div>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none"
          title="Solidity"
        >
          <SolidityIcon />
        </div>

      </div>
    </section>
  );
};

export default SkillsBox;
