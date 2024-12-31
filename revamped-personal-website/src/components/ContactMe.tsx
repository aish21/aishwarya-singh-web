import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import emailConfig from '../emailConfig';

function ContactMe() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errorInName, setErrorInName] = useState<boolean>(false);
  const [errorInEmail, setErrorInEmail] = useState<boolean>(false);
  const [errorInMessage, setErrorInMessage] = useState<boolean>(false);

  const form = useRef();

  const sendMeEmail = (e: any) => {
    e.preventDefault();

    setErrorInName(name === '');
    setErrorInEmail(email === '');
    setErrorInMessage(message === '');

    if (name !== '' && email !== '' && message !== '') {
      var mapUIToEmailAPI = {
        from_name: name,
        reply_to: email,
        message: message,
      };

      emailjs
        .send(
          emailConfig.serviceId,
          emailConfig.templateId,
          mapUIToEmailAPI,
          emailConfig.userId,
        )
        .then(
          (response) => {
            console.log(
              'Email sent successfully.',
              response.status,
              response.text,
            );
          },
          (error) => {
            console.log('Failed to send email.', error);
          },
        );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact-me">
      <div className="items-container">
        <div className="contact-me-wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me for any queries or just to say hi!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-me-form"
          >
            <div className="form-input">
              <TextField
                required
                id="name-req"
                label="Name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errorInName}
                helperText={errorInName ? 'Please enter your name!' : ''}
              />

              <TextField
                required
                id="email-req"
                label="Email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errorInEmail}
                helperText={errorInEmail ? 'Please enter your email!' : ''}
              />
            </div>
            <TextField
              required
              id="msg-req"
              label="Message"
              placeholder="Say something..."
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={errorInMessage}
              helperText={errorInMessage ? 'Please enter your message!' : ''}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendMeEmail}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
