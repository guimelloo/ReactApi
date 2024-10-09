import logo from './logo.svg';
import './App.css';
import './Style.css';
import Api from './Api';
import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    requestIndex();
  },[])

  const requestIndex = async (e) => {
    const emaiIndex = await Api.index();
    // setEmail(emaiIndex);
    // setContent(emaiIndex);
  }

  const submit = async () => {
    const emailSubmit = await Api.create(email, content);

    requestIndex();
    
    setEmail('');  
    setContent('');
  }

  return (
    <div class="email-form-container">
       <div class="header-title">
        <span class="gui">Gui</span><span class="mailler">Mailler</span>
      </div>
      <div class="form-group">
        <label htmlFor="email">Destinatário:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o destinatário"
          required
        />
      </div>

      <div class="form-group">
        <label htmlFor="content">Corpo do E-mail:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite o conteúdo do e-mail"
          rows={4}
          required
        />
      </div>

      <button class="submit-btn" onClick={submit}>Enviar E-mail</button>
    </div>
  );
}

export default App;
