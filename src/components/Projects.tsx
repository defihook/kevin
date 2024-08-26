import { PROJECTS } from "@/config";
import { FC } from "react";
import ProjectItem from "./ProjectItem";

const Projects: FC = () => {
  return (
    <div className="pb-20 mt-4 c-container">
      <div className="grid grid-cols-1 gap-2">
        {PROJECTS.map((item, key) => (
          <ProjectItem
            key={key}
            thumb={item.thumb}
            hoverThumb={item.hoverThumb}
            role={item.role}
            description={item.description}
            stack={item.stack}
            url={item.url}
            isStar={item.isStar}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
