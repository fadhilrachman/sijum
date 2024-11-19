import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
}
const Title = (props: Props) => {
  return (
    <div className={` ${props.className}`}>
      {" "}
      <h3 className=" text-2xl  font-bold text-primary font-nunito">
        {props.title}
      </h3>
      <h3 className="text-2xl my-1 mb-2 font-bold  text-secondary ">
        {props.subtitle}
      </h3>
      <p className="">{props.description}</p>
    </div>
  );
};

export default Title;
