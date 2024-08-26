import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ItemProps {
  thumb: string;
  role: string;
  description: string;
  stack: string;
  url: string;
  hoverThumb?: string;
  isStar?: boolean;
}

const ProjectItem: FC<ItemProps> = ({
  thumb,
  role,
  description,
  stack,
  url,
}) => {
  const stacks = stack.split(",");
  return (
    <div className="rounded-xl w-full relative border border-transparent p-3 border-[#ddd] bg-[#efefef]">
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-[120px] h-[80px] relative overflow-hidden">
          <Image src={thumb} width={120} height={80} className="object-cover" alt="" />
        </div>
        <div className="md:px-4 w-full md:w-[calc(100%-120px)]">
          <p className="text-[#333] my-1 font-semibold text-sm">{role}</p>
          <Link href={url} rel="noreferrer" target="_blank">
            <div className="text-sm cursor-pointer hover:underline">{url}</div>
          </Link>
          <p className="text-[10px] text-black/70 md:text-[14px] leading-[1.5]">{description}</p>
          <ul className="flex flex-wrap gap-3 mt-2 list-disc text-[#333]">
            {stacks.map((item, key) => (
              <li key={key} className="text-[12px] ml-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
