import React from "react"
import styles from "@/styles/styles.module.css";

export default function GamePicture(props) {
  return (
    <>
      <img
        className={styles.gamePicture}
        style={{
          backgroundImage: `url(${props.src})`,
          height: `${props.height}`,
        }}
      ></img>
    </>
  )
}
