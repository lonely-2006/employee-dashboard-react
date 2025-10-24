import { useState } from 'react';

export default function EmployeeForm() {
  const [form, setForm] = useState({
    name: '', designation: '', location: '', salary: ''
  });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="container my-3">
      <h2>Employee Form</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input name="name" type="text" className="form-control" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label>Designation</label>
          <input name="designation" type="text" className="form-control" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input name="location" type="text" className="form-control" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label>Salary</label>
          <input name="salary" type="number" className="form-control" onChange={onChange} />
        </div>
      </form>
    </div>
  );
}
