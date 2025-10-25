import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (no backend post)');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'designation', 'location', 'salary'].map(field => (
          <div className="mb-3" key={field}>
            <label className="form-label" htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input 
              type="text" 
              className="form-control" 
              id={field} 
              name={field} 
              value={formData[field]} 
              onChange={handleChange} 
              required 
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
