import { useState } from 'react';


export default function Psw() { 
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  

  return (
    <div>
      <input
      
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button  onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
