import React, { useState } from 'react';
import style from './CVPDF.module.scss';
import { Document, Page, pdfjs } from 'react-pdf';
//@ts-ignore
import CV from './../../../assets/AndriyDubovichCV.pdf';
import download from 'downloadjs';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CVPDF = () => {
  return (
    <div className={style.main}>
      <h1 className={style.Title}>My Cv</h1>
      <a className={style.File} href={CV} target='_blank'>
        <Document file={CV} onLoadSuccess={() => {}}>
          <Page pageNumber={1} width={window.screen.width - 20} />
        </Document>
      </a>
    </div>
  );
};

export default CVPDF;
