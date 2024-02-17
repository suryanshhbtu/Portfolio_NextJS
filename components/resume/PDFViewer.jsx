import { useRef } from 'react';
import styles from './PDFViewer.module.css';

const PDFViewer = () => {
  const pdfRef = useRef(null);
  
  return (
    <div className={styles.pdfContainer}>
      <iframe
        src="/suryanshhbtu_official.pdf"
        title="PDF Viewer"
        ref={pdfRef}
        className={styles.pdfContent}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
