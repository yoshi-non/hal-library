import { css } from '@emotion/react'

const styles = {
  showDescBlock: css`
    display: flex;
    gap: 10px;
    align-items: center;
  `,

  showDesc__normal: css`
    display: flex;
    align-items: center;
  `,

  showDesc__ban: css`
    display: flex;
    align-items: center;
  `,

  showDesc__normalColor: css`
    margin-left: 5px;
    width: 80px;
    height: 17px;
    background-color: rgb(200, 200, 200);
  `,

  showDesc__banColor: css`
    margin-left: 5px;
    width: 80px;
    height: 17px;
    background-color: rgb(200, 100, 100);
  `,

  leftBlock: css`
    @media screen and (max-width: 930px) {
      display: flex;
      gap: 20px;
    }
  `,

  rightBlock: css`
    @media screen and (max-width: 930px) {
      display: block;
    }
    @media screen and (min-width:930px) and ( max-width:1240px) {
      display: none;
    }
    @media (min-width: 1240px) {
      display: block;
    }
  `
}

const ShowDescription = () => {
  return (
    <div css={styles.showDescBlock}>
      <div css={styles.leftBlock}>
        <div css={styles.showDesc__normal}>通常:<p css={styles.showDesc__normalColor}></p></div>
        <div css={styles.showDesc__ban}>禁帯出:<p css={styles.showDesc__banColor}></p></div>
      </div>
      <p css={styles.rightBlock}>※NK管理部は図書館にはありません</p>
    </div>
  )
}

export default ShowDescription
