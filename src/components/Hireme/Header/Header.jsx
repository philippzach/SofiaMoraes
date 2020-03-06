import React from "react"
import styles from "./Header.module.scss"

const Header = () => (
  <div className={styles.header}>
    <div className={styles.line}>
      <h2 className={styles.spacing}>
        Do you have any project in mind? Web or App design,
        branding, advertisement or creative art direction?{" "}
        <a href="mailto:sofiamoraes.m@gmail.com" className="b">
          Let's connect 💌
        </a>
        {/* Tap into a design solution that gives you you the best quality, flexibility and originality you’ve ever wanted.
    <br/><b>Hire me for a few hours!</b> */}
        <br />
      </h2>
    </div>
  </div>
)

export default Header
