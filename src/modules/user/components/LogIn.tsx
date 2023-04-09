import { FormEvent, useState } from 'react';
import useUserContext from '../hooks/useUserContext';

const LogIn = () => {
  const [username, setUsername] = useState('');

  const userContext = useUserContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username) return;
    console.log('here');
    userContext?.logInWithUsername(username);
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default LogIn;
