import React from 'react'
import styles from "../../../../styles/Navbar.module.css"

type Props = {
    children: React.ReactNode
}

const RightFilBtn = ({children}: Props) => {
  return (
    <button className={styles.filRightBtn__show}>
      {children}
    </button>
  )
}

export default RightFilBtn
