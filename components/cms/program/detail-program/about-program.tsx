import React from "react";

const AboutProgram = ({ description }: { description: string }) => {
  return (
    <div className=" cursor-pointer space-y-2  py-2 rounded-md">
      <h4 className="font-semibold">Tentang Program</h4>
      <div dangerouslySetInnerHTML={{ __html: description as string }} />
    </div>
  );
};

export default AboutProgram;
