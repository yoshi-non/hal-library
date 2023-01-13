import { css } from '@emotion/react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import DownloadIcon from '@mui/icons-material/Download';
import { zeroPadding } from '../../../../lib/PDF';
import { useState, useEffect } from 'react'

const styles = {
  container: css`

  `,

  pdfBlock: css`
    background-color: gray;
    padding: 10px 0;
  `,
  
  pageStyle: css`
    background-color: white;
    width: 210mm;
    height: 148mm;
    margin: 0 auto;
    padding: 0 52px 0 40px;
    letter-spacing: 2px;
    border-bottom: 3px dotted gray;
  `,

  pdfBlock__header: css`
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  
  pdfBlock__header__title: css`
    padding: 0 100px;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 4.2px;
  `,

  pdfBlock__header__date: css`
    font-size: 12px;
    font-weight: 900;
  `,

  inputContainer: css`
    border: 2px solid black;
  `,

  inputBox: css`
    display: flex;
    border: 1px solid black;
  `,

  inputBlock: css`
    padding: 2px;
    flex: 1;
    border: 1px solid black;
    font-size: 14px;
  `,

  inputBlock__title: css`
    font-weight: 900;
    padding-bottom: 5px;
  `,

  inputBlock__input: css`
    height: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  inputBlock__input__circle: css`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    line-height: 17px;
  `,

  showCircle: css`
    border: 1px solid black;
    border-radius: 50%;
  `,

  inputBlock__textarea: css`
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  pdfBlock__footer: css`
    letter-spacing: 0.7px;
  `,

  pdfBlock__footer__desc: css`
    padding: 12px 0px 18px 16px;
    font-size: 13.8px;
    font-weight: 900;
    line-height: 17px;
  `,

  pdfBlock__footer__descDetail: css`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: 900;
    line-height: 17px;
  `,

  pdfBlock__footer__descDetail__text: css`
    border-bottom: 1px solid black;
    line-height: 12px;
    width: fit-content;
  `,

  downloadBlock: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,
  
  downloadBtn: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 5px;
    font-size: 1.5rem;
    font-weight: 900;
    border-radius: 10px;
    background-color: #febd69;
  `,

}

type Props = {
  [key : string] : string
}

const PDF = ({schoolValue, classValue, usernameValue, booknameValue, authorValue, companyValue, remarksValue, reasonValue}: Props) => {
  const printDocument = () => {
    const input = document.getElementsByClassName('invoicePages');

    const pdf = new jsPDF();

    for (let i = 0; i < input.length; i++) {
      html2canvas(input[i] as HTMLElement).then((canvas) => {
        console.log(canvas);
        const imgData = canvas.toDataURL('image/png');
        // addImage(imageData, format, x, y, width, height, alias, compression, rotation)
        // compressionは画像を圧縮するかどうか 
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 148, 'pdf', 'NONE', 0);
        if (input.length - 1 === i) {
          pdf.save('download.pdf');
        } else {
          pdf.addPage();
        }
      });
    }
  }

  const [year, setYear] = useState<number>()
  const [month, setMonth] = useState<string>()
  const [date, setDate] = useState<string>()
  const getDate = () => {
    let today = new Date()

    setYear(today.getFullYear())
    setMonth(zeroPadding(today.getMonth() + 1, 2))
    setDate(zeroPadding(today.getDate(), 2))
  }

  useEffect(() => {
    getDate()
  }, [])
  

  return (
      <div css={styles.container}>
        <div css={styles.pdfBlock}>
          {/* PAGE */}
          <div className="invoicePages" id="invoicePageOne" css={styles.pageStyle}>
            <div css={styles.pdfBlock__header}>
              <h2 css={styles.pdfBlock__header__title}>リクエストカード</h2>
              <p css={styles.pdfBlock__header__date}>申請日&nbsp;&nbsp;{year}&nbsp;&nbsp;年&nbsp;&nbsp;{month}&nbsp;&nbsp;月&nbsp;&nbsp;{date}&nbsp;&nbsp;日</p>
            </div>
            
            <div css={styles.inputContainer}>
              <div css={styles.inputBox}>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>校名（〇で囲む）</p>
                  <div css={styles.inputBlock__input}>
                    <div css={styles.inputBlock__input__circle}>
                      <p css={schoolValue == "MODE" ? styles.showCircle : ""}>MODE</p>
                      <p css={schoolValue == "HAL" ? styles.showCircle : ""}>HAL</p>
                      <p css={schoolValue == "ISEN" ? styles.showCircle : ""}>ISEN</p>
                    </div>
                    <div css={styles.inputBlock__input__circle}>
                      <p css={schoolValue == "PIIF" ? styles.showCircle : ""}>PIIF</p>
                      <p css={schoolValue == "IPUT" ? styles.showCircle : ""}>IPUT</p>
                    </div>
                  </div>
                </div>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>クラス記号</p>
                  <div css={styles.inputBlock__input}>
                    <p>{classValue}</p>
                  </div>
                </div>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>氏名</p>
                  <div css={styles.inputBlock__input}>
                    <p>{usernameValue}</p>
                  </div>
                </div>
              </div>

              <div css={styles.inputBox}>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>書籍名</p>
                  <div css={styles.inputBlock__input}>
                    <p>{booknameValue}</p>
                  </div>
                </div>
              </div>

              <div css={styles.inputBox}>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>著者名（わかっている場合）</p>
                  <div css={styles.inputBlock__input}>
                    <p>{authorValue}</p>
                  </div>
                </div>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>出版社名（わかっている場合）</p>
                  <div css={styles.inputBlock__input}>
                    <p>{companyValue}</p>
                  </div>
                </div>
              </div>

              <div css={styles.inputBox}>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>書籍名が決まっていない場合、ジャンル・内容など</p>
                  <div css={styles.inputBlock__textarea}>
                    <p>{remarksValue}</p>
                  </div>
                </div>
              </div>

              <div css={styles.inputBox}>
                <div css={styles.inputBlock}>
                  <p css={styles.inputBlock__title}>リクエスト理由（具体的に記述すること）</p>
                  <div css={styles.inputBlock__textarea}>
                    <p>{reasonValue}</p>
                  </div>
                </div>
              </div>

            </div>

            <div css={styles.pdfBlock__footer}>
              <div css={styles.pdfBlock__footer__desc}>
                <p>
                  ※&nbsp;&nbsp;閲覧頻度が高いことが予想されるなど、学校が必要と認めたもののみ図書館に置くことができます。<br />
                  リクエストした書籍が必ず図書館に置かれるということではありません。ご了承ください。
                </p>
              </div>
              <div css={styles.pdfBlock__footer__descDetail}>
                <p css={styles.pdfBlock__footer__descDetail__text}>
                  ※結果は図書館内の掲示板に提示します。&nbsp;採用決定から入荷まで、2か月程度かかる場合もあります。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div css={styles.downloadBlock}>
          <button css={styles.downloadBtn} onClick={() => printDocument()}><DownloadIcon/>&nbsp;ダウンロード</button>
        </div>

      </div>
  );
}
    
export default PDF