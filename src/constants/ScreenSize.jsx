import React from "react";
import { createContext } from "react";

const SizeContext = createContext(ScreenSize);
function ScreenSize() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
}

export default SizeContext;
