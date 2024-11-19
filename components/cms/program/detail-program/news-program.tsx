import { Steps } from "antd";
import React from "react";

const NewsProgram = () => {
  return (
    <div>
      <h4 className="font-semibold">Berita Program</h4>
      <Steps
        direction="vertical"
        progressDot
        current={4}
        items={[
          {
            title: "12 September 2020",
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, deleniti. Totam error earum similique! Iste molestiae in atque itaque laborum!",
          },
          {
            title: "In Progress",
            description: "This is a description.",
          },
          {
            title: "Waiting",
            description: "This is a description.",
          },
        ]}
      />
    </div>
  );
};

export default NewsProgram;
