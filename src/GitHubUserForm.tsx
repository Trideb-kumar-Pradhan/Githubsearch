// import React, { useState } from 'react';
// import axios from 'axios';
// import { useGitHubUser } from './GitHubUserContext';

// const GitHubUserForm: React.FC = () => {
//     const [username, setUsername] = useState('');
//     const { addUser } = useGitHubUser();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             const response = await axios.get(`/users/${username}`);
//             addUser(username, response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter GitHub username"
//             />
//             <button type="submit">Search</button>
//         </form>
//     );
// };

// export default GitHubUserForm;
// src/GitHubUserForm.tsx
import React, { useState } from 'react';
import { useGitHubUser } from './GitHubUserContext';

const GitHubUserForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const { fetchUserData } = useGitHubUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchUserData(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Fetch User</button>
    </form>
  );
};

export default GitHubUserForm;
