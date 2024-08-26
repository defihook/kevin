import { FC } from "react";

const Experience: FC = () => {
  const liClass = "text-sm text-white mb-2";
  const titleClass =
    "flex items-center text-white justify-between italic pb-1 mb-2 border-b border-[#ddd]";
  return (
    <section className="pb-20 my-5 c-container">
      <div className="mb-5">
        <div className={titleClass}>
          Senior Full-stack Developer | Shredded Apes (SAGC){" "}
          <span className="text-sm italic">Aug 2022 - Apr 2024</span>
        </div>
        <ul className="ml-8 list-disc text-white">
          <li className={liClass}>
            Led a team of 3 frontend developers in designing and implementing
            cutting-edge web solutions for Shredded Apes (SAGC). Provided
            hands-on technical guidance, code reviews, and mentorship to ensure
            consistent high-quality code and adherence to best practices.
          </li>
          <li className={liClass}>
            Optimized website performance by implementing techniques such as
            lazy loading, code splitting, and browser caching, leading to a 30%
            reduction in page load times. performance monitoring tools to
            identify bottlenecks and implement efficient solutions for improved
            site speed and responsiveness.
          </li>
          <li className={liClass}>
            Oversaw the creation and upkeep of SAGC company websites, namely
            https://shreddedapes.io and https://shreddedapes.shop.{" "}
          </li>
          <li className={liClass}>
            Played a pivotal role in achieving a combined SAGC collection
            valuation of 47K SOL (approximately 1.2M USD) on the marketplace.
          </li>
          <li className={liClass}>
            Spearheaded the growth of $WHEY holders, propelling the count to
            surpass 20K.
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <div className={titleClass}>
          Senior Frontend and Web3 Engineer | Moduluc{" "}
          <span className="text-sm italic">Feb 2021 - Jan 2024</span>
        </div>
        <ul className="ml-8 list-disc">
          <li className={liClass}>
            Led the integration of blockchain technology and Web3 protocols into
            Moduluc{"'"}s web applications, enabling secure and transparent
            decentralized interactions.
          </li>
          <li className={liClass}>
            Developed the frontend for enterprise websites, such as
            https://moduluc.com, https://airia.xyz, and https://aus.airia.xyz.
          </li>
          <li className={liClass}>
            Guided the AiriA collection to an impressive cumulative volume of
            16.4K SOL (approximately 600K USD) on Magic Eden
          </li>
          <li className={liClass}>
            Orchestrated an extraordinary expansion of the user base from 50K to
            an astounding 200M.n.
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <div className={titleClass}>
          Senior Full-stack Developer | Jackpot{" "}
          <span className="text-sm italic">Jan 2022 - Apr 2023</span>
        </div>
        <ul className="ml-8 list-disc">
          <li className={liClass}>
            Led a team of 3 frontend developers in designing and implementing
            cutting-edge web solutions for Shredded Apes (SAGC). Provided
            hands-on technical guidance, code reviews, and mentorship to ensure
            consistent high-quality code and adherence to best practices.
          </li>
          <li className={liClass}>
            Optimized website performance by implementing techniques such as
            lazy loading, code splitting, and browser caching, leading to a 30%
            reduction in page load times. performance monitoring tools to
            identify bottlenecks and implement efficient solutions for improved
            site speed and responsiveness.
          </li>
          <li className={liClass}>
            Spearheaded the creation and administration of the Solana Shuffle
            website (https://solanashuffle.com), driving its development and
            management.
          </li>
          <li className={liClass}>
            Innovatively introduced engaging games like jackpot, tower, and
            coin-flip, resulting in a remarkable casino revenue of over 200K
            dollars.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
