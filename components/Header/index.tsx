import React, { ReactElement, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./Header.module.css";
import classNames from "classnames";
import Question from "../icons/Question";
import Settings from "../icons/Settings";
import ChevronBottom from "../icons/Chevron";

interface Props {}

export default function Header({}: Props): ReactElement {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {},
    })
  );
  const classes = useStyles();
  const [OpenGames, setOpenGames] = useState(false);
  const [OpenSubCategories, setOpenSubCategories] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.root}>
        <Grid item xs={12}>
          <div className={classNames(styles.flex, styles.headerRight)}>
            <div className={styles.flex}>
              <button
                onClick={() => setOpenGames(!OpenGames)}
                className={styles.button}
                style={{ background: OpenGames && "#e5e5e5" }}
              >
                <span className={styles.title} style={{ fontSize: 24 }}>
                  Games
                </span>
                <ChevronBottom stroke="black" fill="black" />
                <Menu Open={OpenGames} />
              </button>
              <button
                onClick={() => setOpenSubCategories(!OpenSubCategories)}
                className={styles.button}
                style={{ background: OpenSubCategories && "#e5e5e5" }}
              >
                <span className={styles.title}>Subcategories</span>
                <ChevronBottom stroke="black" fill="black" />
                <Menu Open={OpenSubCategories} />
              </button>
              <div className={styles.border}></div>
              <button
                style={{
                  borderBottom: "4px solid #689f38",
                  marginBottom: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
                className={styles.button}
              >
                <span style={{ fontWeight: 700 }} className={styles.title}>
                  Home
                </span>
              </button>
              <button className={styles.button}>
                <span className={styles.title}>Top charts</span>
              </button>
              <button className={styles.button}>
                <span className={styles.title}>New Releases</span>
              </button>
            </div>
            <div className={styles.flex}>
              <button className={classNames(styles.button, styles.icon)}>
                <Question stroke="black" fill="black" />
              </button>
              <button className={classNames(styles.button, styles.icon)}>
                <Settings stroke="black" fill="black" />
              </button>
            </div>
          </div>
        </Grid>
      </div>
    </React.Fragment>
  );
}

function Menu({ Open }: { Open: Boolean }) {
  return (
    <div
      style={{
        display: Open === false && "none",
        maxHeight: 881,
      }}
      className={styles.container}
    >
      <ul
        style={{
          paddingLeft: 40,
          margin: "13px 0",
        }}
      >
        <li>
          <ul className={styles.list}>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_ACTION"
                title="Aksiyon"
              >
                Aksiyon
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_ARCADE"
                title="Arcade"
              >
                Arcade
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_PUZZLE"
                title="Bulmaca"
              >
                Bulmaca
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_EDUCATIONAL"
                title="Eğitici"
              >
                Eğitici
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_TRIVIA"
                title="Eğlencelik Bilgi Oyunları"
              >
                Eğlencelik Bilgi Oyunları
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_CARD"
                title="Kağıt"
              >
                Kağıt
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_WORD"
                title="Kelime"
              >
                Kelime
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_CASUAL"
                title="Klasik"
              >
                Klasik
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_CASINO"
                title="Kumarhane Oyunları"
              >
                Kumarhane Oyunları
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_ADVENTURE"
                title="Macera Oyunları"
              >
                Macera Oyunları
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_BOARD"
                title="Masa Oyunları"
              >
                Masa Oyunları
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_MUSIC"
                title="Müzik"
              >
                Müzik
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_ROLE_PLAYING"
                title="Rol Oyunu"
              >
                Rol Oyunu
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_SIMULATION"
                title="Simülasyon"
              >
                Simülasyon
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_SPORTS"
                title="Spor"
              >
                Spor
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_STRATEGY"
                title="Strateji Oyunları"
              >
                Strateji Oyunları
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/store/apps/category/GAME_RACING"
                title="Yarış"
              >
                Yarış
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
