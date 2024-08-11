import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import { v4 as uuidv4 } from 'uuid';
import CertificateTemplate from './CertificateTemplate';
import html2canvas from 'html2canvas';
import Sidebar from './SideBar';
import jsPDF from 'jspdf';
import Cookies from 'universal-cookie';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [certificateId, setCertificateId] = useState(null);
  const [id, setId] = useState('');
  const [file, setFile] = useState(null);
  const [signature, setSignature] = useState(null);
  const [url, setUrl] = useState('');
  const [signatureUrl, setSignatureUrl] = useState('');
  const [isCertificateGenerated, setIsCertificateGenerated] = useState(false); // New state

  const [message, setMessage] = useState('');
  const cookies = new Cookies();

  const uploadToCloudinary = async (image) => {
    const imgData = new FormData();
    imgData.append('file', image);
    imgData.append('upload_preset', 'dvwort4i3');
    imgData.append('cloud_name', 'dvwort4i3');

    const res = await fetch('https://api.cloudinary.com/v1_1/dvwort4i3/image/upload', {
      method: 'post',
      body: imgData,
    });

    const cloudData = await res.json();
    return cloudData.url;
  };

  const saveImages = async () => {
    try {
      const certificateUrl = await uploadToCloudinary(file);
      const signUrl = await uploadToCloudinary(signature);
      setUrl(certificateUrl);
      setSignatureUrl(signUrl);
      return { certificateUrl, signUrl };
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const getData = async (e) => {
    e.preventDefault();
    const newCertificateId = uuidv4();
    setCertificateId(newCertificateId);

    const { certificateUrl, signUrl } = await saveImages();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('course', course);
    formData.append('date', date);
    formData.append('certificateUrl', certificateUrl);
    formData.append('signUrl', signUrl);

    try {
      const token = cookies.get('token');
      console.log('id', token);

      const response = await axios.post('/api/submitform', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });
      const recordId = response.data.updatedEntry._id;
      console.log('Extracted ID:', recordId);
      setId(recordId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenerateCertificate = async (id) => {
    if (!certificateId) {
      alert('Save certificate first!');
      return;
    }

    try {
      const token = cookies.get('token');
      console.log(id);
      const response = await axios.post(`/api/certificates/${id}/generate`,
        { certificateId: certificateId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response) {
        setIsCertificateGenerated(true); 
        // setMessage('Generated successfully');
      }
      console.log('Certificate ID saved:', response.data);
    } catch (error) {
      console.error('Error saving certificate ID:', error);
    }
  };

  const downloadCertificate = () => {
    html2canvas(document.querySelector('#certificate')).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  // download as pdf
  const downloadPDF = () => {
    const input = document.getElementById('certificate');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('certificate.pdf');
      
      
    });
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <div>
          <Sidebar />
        </div>

        <div className="box">
          <form method="post" onSubmit={getData}>
            <h2>Fill Form to generate Certificate</h2>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="course">
              <input
                type="text"
                name="course"
                placeholder="Enter Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </label>
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label htmlFor="file" style={{ display: 'inline-block', marginRight: '10px' }}>
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                style={{ display: 'none' }}
              />
              <button type="button" onClick={() => document.querySelector('input[name="file"]').click()}>
                Upload Logo
              </button>
            </label>
            <label htmlFor="sign" style={{ display: 'inline-block', marginRight: '10px' }}>
              <input
                type="file"
                name="sign"
                onChange={(e) => {
                  setSignature(e.target.files[0]);
                }}
                style={{ display: 'none' }}
              />
              <button type="button" onClick={() => document.querySelector('input[name="sign"]').click()}>
                Upload Signature
              </button>
            </label>
            <button type="submit">save</button>
          </form>
        </div>
      </div>

      <CertificateTemplate name={name} course={course} date={date} file={file} signature={signature} certificateId={certificateId} />
      {/* {message} */}
      <div className="button-container">
        
      <button onClick={downloadCertificate} disabled={!isCertificateGenerated}>Download as PNG</button>
          <button onClick={downloadPDF} disabled={!isCertificateGenerated}>Download as PDF</button>
        <button type="button" onClick={() => handleGenerateCertificate(id)}>
          Generate Certificate
        </button>
      </div>
      <Footer />
    </>
  );
}
