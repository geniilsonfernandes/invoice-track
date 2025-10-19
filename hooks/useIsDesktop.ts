import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    // inicializa o estado
    setIsDesktop(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
};
