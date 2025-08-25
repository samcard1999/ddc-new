import { useEffect } from "react";

const useWhatsappScrollEffect = (refButton, refContainer) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!refButton.current || !refContainer.current) return;

      const scrollY = window.scrollY;
      const container = refContainer.current;
      const containerBottom = container.offsetTop + container.offsetHeight;
      const windowBottom = scrollY + window.innerHeight;
      const isNearBottom = containerBottom - windowBottom < 300;

      const button = refButton.current;

      if (scrollY > 300 && !isNearBottom) {
        button.classList.add("bottom-2");
        button.classList.remove("bottom-12");
      } else {
        button.classList.add("bottom-12");
        button.classList.remove("bottom-2");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refButton, refContainer]);
};

export default useWhatsappScrollEffect;
