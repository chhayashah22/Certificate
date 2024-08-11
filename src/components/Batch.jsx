import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import './Batch.css';
import { v4 as uuidv4 } from 'uuid';
import html2canvas from "html2canvas";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import Footer from "./Footer";

function CertificateGenerator() {
    const [excelData, setExcelData] = useState([]);
    const [generate, setGenerate] = useState(false);
    const [templateSize, setTemplateSize] = useState('landscape');
    const [certificateId, setCertificateId] = useState('null');
    const [imageLinks, setImageLinks] = useState({});

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(jsonData);
        };
        reader.readAsArrayBuffer(file);
    };

    const handlegenerate = (event) => {
        event.preventDefault();
        const newCertificateId = uuidv4();
        setCertificateId(newCertificateId);
        setGenerate(true);
    };

    useEffect(() => {
        if (generate) {
            // Wait for the next render to ensure all elements are available
             setTimeout(() => {
                downloadCertificates();
            }, 1000);        

                          //inbuilt 
        }
    }, [generate]);                      //dependencies rerender 

    const downloadCertificates = async () => {
        const links = [];
        for (let index = 0; index < excelData.length; index++) {
            const certificateElement = document.getElementById(`certificate-${index}`);
            if (certificateElement) {
                const canvas = await html2canvas(certificateElement);
                const dataURL = canvas.toDataURL("image/png");
                links[index] = dataURL;
            } else {
                console.error(`Element with id certificate-${index} not found.`);
            }
        }
        setImageLinks(links);
    };
    
    const downloadPDF = () => {
        const input = document.getElementById('certificate'); 
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('certificate.pdf');
            const pdfdata=pdf.output('blob')
            console.log(pdfdata)
          });
        }
    const handleSizeChange = (event) => {
        setTemplateSize(event.target.value);
    };

    return (
        <>
        <Navbar/>
        <div className="page">
            <div><Sidebar/></div>
        
        
                <div className="box">
            
            <h2>Generate Batch of Certificates</h2>
            <form onSubmit={handlegenerate}>
                <label for="file">Click to upload
                <input  type="file" id="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
                </label>
                <label for="select">
                <select value={templateSize} onChange={handleSizeChange} id="select">
                    <option value="landscape">Landscape</option>
                    <option value="portrait">Portrait</option>
                </select>     
                </label>     
             
                <button type="submit">Generate</button>
                
    

            </form>
            </div>
            </div>
            {generate && (
                <div id="certificates">
                    {excelData.map((row, index) => (
                        <div key={index}>
                            <div id={`certificate-${index}`} className={`batch-certificate ${templateSize}`}>
                                <div className="content">
                                  <h1 className="text">Rimt University</h1>
                                    <h1>Certificate OF Participation</h1>
                                    <p>This certificate is awarded to</p>
                                    <h2>{row.Name}</h2>
                                    <p>for outstanding performance in</p>
                                    <h3>{row.course}</h3>
                                    <div className='container2'>
                                   <div className='CID'>

        
                                 <p >Certificate No. {certificateId}</p>
        
                                   </div>
                                <div className='sine'>        
                              <p>______________________</p> <p>Signature</p></div>
      
                                  </div>
                                </div>
                            </div>
                            {imageLinks[index] && (
                                <div>
                                    <button >
                                    <a href={imageLinks[index]} download={`certificate-${index}.png`}>Download Certificate </a></button>
                                   
                                </div>
                            )}
                          
                        </div>
                    ))}
                       
                </div>
            )}
            <Footer/>
            
        </>
    );
}

export default CertificateGenerator;
