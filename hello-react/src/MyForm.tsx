import { ChangeEvent, useState } from 'react';

function MyForm() {
  const [user, setUser] = useState({
    username: 'romain',
    isActive: true,
    description: 'Blah blah blah',
    gender: 'Male',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const value = event.target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : event.target.value;
    setUser({ ...user, [event.target.name]: value });
  }

  return (
    <form className="MyForm">
      <div>
        Username : <input name="username" value={user.username} onChange={handleChange} />
      </div>
      <div>
        Active : <input name="isActive" checked={user.isActive} type="checkbox" onChange={handleChange} />
      </div>
      <div>
        Description : <textarea name="description" value={user.description} onChange={handleChange}></textarea>
      </div>
      <div>
        Gender :{' '}
        <select name="gender" value={user.gender} onChange={handleChange}>
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>
    </form>
  );
}

export default MyForm;
