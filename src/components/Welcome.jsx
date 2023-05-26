import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Welcome = () => {
  const formData = useSelector((state) => state.formData);

  return (
    <div className="welcome-container">
      <h2 className="welcome-message">Selamat Datang!</h2>
      <p>Terima Kasih Telah Mendaftar pada Website Ini.</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Bootcamp: {formData.bootcamp}</p>
      <p>Birth Date: {formData.birthDate}</p>
      <p>Birth Place: {formData.birthPlace}</p>
      <p>Address: {formData.address}</p>
    </div>
  );
};

export default Welcome;
