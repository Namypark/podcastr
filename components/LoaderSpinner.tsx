import React from "react";
import { Loader } from "lucide-react";

const LoaderSpinner = () => {
  return (
    <div flex-center h-dvh w-full>
      <Loader className="animate-spin text-orange-1 " size={30} />
    </div>
  );
};

export default LoaderSpinner;
