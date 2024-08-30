import React, { useState } from 'react'
import QRCode from 'react-qr-code';
const QrCodeGenerator = () => {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");
    
    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }
  return (
      <div>
         <h1>QrCodeGenerator</h1> 
          <input onChange={(e)=>setInput(e.target.value)}
              type='text'
              name="qr-code"
              value={input}
              placeholder='Enter your value here'
          />
          <button disabled={input && input.trim()!==''?false:true }
              onClick={handleGenerateQrCode}>Generate</button>
          <div>
              <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='#fff'/>
          </div>
      </div>
  )
}

export default QrCodeGenerator