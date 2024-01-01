import { useEffect, useState } from "react";
import "./App.css";
import { parse } from "yaml";
import AnimatedIcon from "./AnimatedIcon";

type Icons = {
  href: string;
  img: string;
};

function App() {
  const [icons, setIcons] = useState<[Icons]>();
  useEffect(() => {
    fetch("/config.yaml")
      .then((res) => res.text())
      .then((text) => {
        setIcons(parse(text).icons);
      });
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-zinc-900 text-zinc-300">
      {icons?.map((icon, idx) => (
        <AnimatedIcon href={icon.href} img={icon.img} key={idx} />
      ))}
    </div>
  );
}

export default App;
