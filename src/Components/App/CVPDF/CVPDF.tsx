import React, { useState } from 'react';
import style from './CVPDF.module.scss';
import { Document, Page, pdfjs } from 'react-pdf';
//@ts-ignore
import CV from './../../../assets/DubovichAndriyCV.pdf';
//@ts-ignore
import CV_Links from './../../../assets/DubovichAndriyCVLinks.pdf';
import download from 'downloadjs';
import { Box, Typography } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CVPDF = () => {
  return (
    <Box
      className={style.main}
      id='cv'
      sx={{ backgroundColor: 'primary.main' }}
    >
      <Typography
        variant={'h3'}
        className={style.Title}
        sx={{ color: 'text.primary' }}
      >
        My Cv
      </Typography>
      <a className={style.File} href={CV_Links} target='_blank'>
        <Document file={CV} onLoadSuccess={() => {}}>
          <Page pageNumber={1} width={window.screen.width - 10} />
        </Document>
      </a>
    </Box>
  );
};

export default CVPDF;