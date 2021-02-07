import React, { ReactElement } from "react";
import styles from "./Title.module.css";
interface Props {
  title: String;
}

export default function Title({ title }: Props): ReactElement {
  return <h2 className={styles.title}>{title}</h2>;
}
