import React, { ReactElement, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Card from "../Card";
import styles from "./Section.module.css";
interface Props {
  TopChildren: React.ReactNode;
  games: games[];
  subTitle?: String;
}
interface games {
  url: String;
  title: String;
  subtitle: String;
  rate: Number;
}
export default function Section({
  TopChildren,
  games,
  subTitle,
}: Props): ReactElement {
  const [Count, setCount] = useState(8);
  const size = useWindowSize();
  useEffect(() => {
    const count = (size.width * 9) / 10 / 180;
    setCount(count);
  }, [size.width]);
  return (
    <div className={styles.mb}>
      <div className={styles.top}>
        <div>
          {TopChildren}
          <h2 className={styles.subTitle}>{subTitle}</h2>
        </div>
        <button className={styles.button}>See more</button>
      </div>
      <div className={styles.bottom}>
        {games.slice(0, Count).map((data) => (
          <Card
            rate={data.rate}
            url={data.url}
            title={data.title}
            subtitle={data.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
