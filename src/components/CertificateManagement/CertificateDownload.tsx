// CertificateDownload.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import CertificateView from "./CertificateView"; // Adjust path as needed

const CertificateDownload = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const downloadImage = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for DOM render
      const element = document.getElementById("certificate-wrapper");
      if (!element) return;

      const canvas = await html2canvas(element, { scale: 2 });
      const link = document.createElement("a");
      link.download = "certificate.jpeg";
      link.href = canvas.toDataURL("image/jpeg", 1.0);
      link.click();

      navigate(-1); // go back after download
    };

    downloadImage();
  }, [navigate]);

  return <CertificateView />;
};

export default CertificateDownload;
