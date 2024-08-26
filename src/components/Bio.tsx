"use client";

import Image from "next/image";
import { FC } from "react";
import { CheckMark, DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon } from "./Icons";
import { SOCIAL_LINKS } from "@/config";
import Link from "next/link";
// import { Carousel } from "react-responsive-carousel";

const Bio: FC = () => {
  const linkClass = "w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 p-1";

  return (
    <section className="c-container mt-7 md:mt-20">
      <div className="flex gap-5">
        <div className="relative hidden overflow-hidden rounded-lg sm:block sm:w-20 aspect-square drop-shadow-xl">
          <Image
            src="/images/avatar.png"
            fill
            className="object-contain overflow-hidden "
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 120px, 120px"
            alt=""
          />
        </div>
        <div className="w-full sm:w-[calc(100%-120px)]">
          <h1 className="relative inline-block text-xl">
            <span className="font-bold text-white">
              Franky Kevin{" "}
              <span className="absolute -right-6 top-1">
                <CheckMark />
              </span>
            </span>
          </h1>
          <p className="text-black/80 text-sm leading-[1.6]  text-white">
            Blockchain Engineer
          </p>
          <p className="text-black/80 font-medium text-xs md:text-sm leading-[1.6]  text-white" >
            Solana | Ethereum | Bitcoin | TON
          </p>
          <div className="flex items-center gap-3 mt-2">
            <Link href={SOCIAL_LINKS.twitter} target="_blank" aria-label="You can find on Discord">
              <div className={linkClass}>
                <TwitterIcon />
              </div>
            </Link>
            <Link href={SOCIAL_LINKS.github} target="_blank" aria-label="Github: Blockchain developer">
              <div className={linkClass}>
                <GithubIcon />
              </div>
            </Link>
            <Link href={SOCIAL_LINKS.telegram} target="_blank" aria-label="Free talking on defihook telegram">
              <div className={linkClass}>
                <TelegramIcon />
              </div>
            </Link>
            <Link href={SOCIAL_LINKS.discord} target="_blank" aria-label="You can find on Discord">
              <div className={linkClass}>
                <DiscordIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm md:text-md text-black/80  text-white">
        Blockchain (Web3 + Smart contract) Engineer that involved in Solana, EVM compatible chains, TON blockchain and Bitcoin (Ordinal and Rune).
      </p>
      {/* <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay
        className="mt-4"
      >
        {sliders.map(({ image, description }, index) => (
          <div className="w-full aspect-[720/170]" key={index}>
            <Image fill unoptimized src={image} alt={description} />
          </div>
        ))}
      </Carousel> */}
    </section>
  );
};

export default Bio;

// const sliders = [
//   {
//     image: "/images/pump-fun.png",
//     description: "pump.fun fork, pump.fun bundling, meme coin launchpad",
//   },
//   {
//     image: "/images/web3-games.png",
//     description:
//       "web3 game development, jackpot, crash, minesweeper, tower, dice",
//   },
//   {
//     image: "/images/bot.png",
//     description:
//       "bot development, cli bot, telegram bot, solana token sniper, discord bot",
//   },
// ];
