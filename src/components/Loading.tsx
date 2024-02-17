import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image
        src="/logo.svg"
        height={500}
        width={500}
        alt=""
        priority
        className="lg:h-[500px] lg:w-[500px] h-[300px] w-[300px]"
      />
    </div>
  );
};

export default Loading;
