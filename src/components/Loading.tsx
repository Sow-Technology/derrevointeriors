import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image src="/logo.svg" height={500} width={500} alt="" priority />
    </div>
  );
};

export default Loading;
