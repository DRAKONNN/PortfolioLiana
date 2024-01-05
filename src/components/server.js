const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  const apiKey = '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';
  const senderEmail = 'tucorreo@tudominio.com';

  const data = {
    sender: { email: senderEmail },
    to: [{ email: 'rafakhis14@gmail.com' }],
    subject: 'Nuevo mensaje desde el formulario',
    text: `Email: ${email}\n\nMensaje: ${message}`,
  };

  try {
    const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
    });

    res.status(200).send('Correo enviado correctamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error.toString());
    res.status(error.response?.status || 500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});