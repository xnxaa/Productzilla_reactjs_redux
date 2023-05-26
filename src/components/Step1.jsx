import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveStep1Data } from '../store/actions';
import '../App.css';

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bootcamp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveStep1Data(formData));
    navigate('/step2');
  };

  return (
    <div className="step1-container">
      <h2 className="step1-form">Step 1</h2>
      <form onSubmit={handleSubmit} className="step1-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Bootcamp:</label>
          <div>
            <label>
              <input
                type="radio"
                name="bootcamp"
                value="UI/UX"
                checked={formData.bootcamp === 'UI/UX'}
                onChange={handleChange}
              />
              UI/UX
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="bootcamp"
                value="Backend Engineer"
                checked={formData.bootcamp === 'Backend Engineer'}
                onChange={handleChange}
              />
              Backend Engineer
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="bootcamp"
                value="Frontend Engineer"
                checked={formData.bootcamp === 'Frontend Engineer'}
                onChange={handleChange}
              />
              Frontend Engineer
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="bootcamp"
                value="Digital Marketing"
                checked={formData.bootcamp === 'Digital Marketing'}
                onChange={handleChange}
              />
              Digital Marketing
            </label>
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step1;



