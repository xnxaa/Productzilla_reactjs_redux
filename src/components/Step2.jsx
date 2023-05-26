import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveStep2Data } from '../store/actions';
import '../App.css';

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    birthDate: '',
    birthPlace: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveStep2Data(formData));
    navigate('/step3');
  };

  return (
    <div className="step2-container">
      <h2 className="step2-form">Step 2</h2>
      <form onSubmit={handleSubmit} className="step2-form">
        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="birthPlace">Birth Place:</label>
          <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step2;
