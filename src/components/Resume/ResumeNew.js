import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker ayarı
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // PDF path: public/Latif_Altay.pdf
  const pdfPath = `${process.env.PUBLIC_URL}/Latif_Altay.pdf`;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download button üst */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <br />

        {/* PDF görüntüleme */}
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          className="d-flex flex-column align-items-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Row key={`page_${index + 1}`} className="mb-4">
              <Page
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            </Row>
          ))}
        </Document>

        {/* Download button alt */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
