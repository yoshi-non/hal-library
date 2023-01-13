import { css } from '@emotion/react';

const styles = {
  noteBlock: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,
}

const NoteBlock = () => {
  return (
    <div css={styles.noteBlock}>
      <p>※&nbsp;PDFでダウンロードしたらA4用紙に印刷し、点線に沿って切り取って図書館のカウンターに提出してください。</p>
    </div>
  )
}

export default NoteBlock