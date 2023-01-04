import React from 'react'
import styles from "../../../../styles/Navbar.module.css"

type Props = {
    children: React.ReactNode
}

const LeftFilBtn = ({children}: Props) => {
  return (
    <button className={styles.filLeftBtn}>
      {children}
    </button>
  )
}

export default LeftFilBtn
