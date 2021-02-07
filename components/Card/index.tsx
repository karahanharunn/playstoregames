import React, { ReactElement } from "react";
import styles from "./Card.module.css";
interface Props {
  url: String;
  title: String;
  subtitle: String;
  rate: Number;
}

export default function Card({
  url,
  title,
  subtitle,
  rate,
}: Props): ReactElement {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img
          src={`${url}`}
          className={styles.image}
          alt="Picture of the author"
        />
      </div>

      <div className={styles.bottomArea}>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.subTitle}>{subtitle}</h2>

        <div className={styles.starRatingCss}>
          <div className={styles.starRatingCssTop} style={{ width: +rate }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className={styles.starRatingCssBottom}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
