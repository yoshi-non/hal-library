import InfoIcon from '@mui/icons-material/Info';
import { css } from '@emotion/react';

const styles = {
  infoBlock: css`
    display: flex;
    align-items: center;
    background-color: rgba(191,219,254,1);
    padding: 10px;
    margin: 0 auto 2.5rem auto;
    width: 80%;
  `,

  infoBlock__icon: css`
    font-size: 2rem;
    color: rgba(59, 130, 246, 1);
    margin-right: 10px;
  `,
}

const InfoBlock = () => {
  return (
    <div css={styles.infoBlock}>
      <InfoIcon css={styles.infoBlock__icon}/><p>記入した個人情報のサーバへの通知・保存は一切されません</p>
    </div>
  )
}

export default InfoBlock