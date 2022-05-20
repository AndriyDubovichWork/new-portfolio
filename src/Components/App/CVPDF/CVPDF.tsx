import React, { useState } from 'react';
import style from './CVPDF.module.scss';
import { Document, Page, pdfjs } from 'react-pdf';
//@ts-ignore
import CV from './../../../assets/AndriyDubovichCV.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CVPDF = () => {
  return (
    <div className={style.main}>
      <h1 className={style.Title}>My Cv</h1>
      <div className={style.File}>
        <Document file={CV} onLoadSuccess={() => {}}>
          <Page pageNumber={1} width={window.screen.width - 20} />
        </Document>
      </div>
    </div>
  );
};

export default CVPDF;
