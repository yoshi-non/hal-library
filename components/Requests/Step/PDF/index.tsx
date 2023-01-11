import { css } from '@emotion/react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

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
    padding: 0 40px;
    letter-spacing: 2px;
  `,

  pdfBlock__header: css`
    padding-top: 20px;
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
}

const PDF = () => {
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

  return (
      <div css={styles.container}>
        <div>
          <button onClick={() => printDocument()}>ダウンロード</button>
        </div>
        <div css={styles.pdfBlock}>
          {/* PAGE */}
          <div className="invoicePages" id="invoicePageOne" css={styles.pageStyle}>
            <div css={styles.pdfBlock__header}>
              <h2 css={styles.pdfBlock__header__title}>リクエストカード</h2>
              <p css={styles.pdfBlock__header__date}>申請日&nbsp;&nbsp;2023&nbsp;&nbsp;年&nbsp;&nbsp;01&nbsp;&nbsp;月&nbsp;&nbsp;12&nbsp;&nbsp;日</p>
            </div>
            
            <div>
              <div>
                <div>
                  <p>校名（〇で囲む）</p>
                  <div>
                    <p>MODE HAL ISEN</p>
                    <p>PIIF IPUT</p>
                  </div>
                </div>
                <div>
                  <p>クラス記号</p>
                </div>
                <div>
                  <p>氏名</p>
                </div>
              </div>

              <div>
                <div>
                  <p>書籍名</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
}
    
export default PDF