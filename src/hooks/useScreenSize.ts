import { useState, useEffect } from "react";

type ScreenSize = "sm" | "md";

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() =>
    window.innerWidth >= 768 ? "md" : "sm"
  );

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 768) {
      setScreenSize("md");
    } else {
      setScreenSize("sm");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
