import React from 'react';

export const EmailTemplate = ({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Message:</strong> {message}</p>
  </div>
);
