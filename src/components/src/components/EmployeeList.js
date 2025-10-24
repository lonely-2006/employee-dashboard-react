import { useEffect, useState } from 'react';

export default function EmployeeList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="container my-3">
      <h2>Employee Dashboard</h2>
      <table className="table table-striped">
        <thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}><td>{u.id}</td><td>{u.name}</td><td>{u.email}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
