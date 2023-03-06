import React, { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ExpandAnimation: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ref, isView] = useInView();
  const [component, setComponent] = useState<boolean>(false);

  useEffect(() => {
    if (isView) {
      setComponent(true);
    }
  }, [isView]);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-500 ease-in-out ${
        component ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      {children}
    </div>
  );
};
