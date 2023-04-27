import { useState } from "react";

function MyForm() {
  const [username, setUsername] = useState('romain');

  return (
    <form className="MyForm">
      <div>
        Username : <input value={username} onChange={(event) => {setUsername(event.currentTarget.value)}} />
      </div>
      <div>
        Active : <input type="checkbox" />
      </div>
      <div>
        Description : <textarea></textarea>
      </div>
      <div>
        Gender : <select>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
    </form>
  );
}

export default MyForm;
