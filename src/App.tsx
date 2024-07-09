// import React, { useState } from 'react';
// import { GitHubUserProvider } from './GitHubUserContext';
// import GitHubUserForm from './GitHubUserForm';
// import UserRepositories from './UserRepositories';

// const App: React.FC = () => {
//   const [username, setUsername] = useState<string | null>(null);

//   return (
//     <GitHubUserProvider>
//       <div className="App">
//         <h1>GitHub User Search</h1>
//         <GitHubUserForm />
//         {username && <UserRepositories username={username} />}
//       </div>
//     </GitHubUserProvider>
//   );
// };

// export default App;
// src/App.tsx
import React, { useState } from 'react';
import { GitHubUserProvider, useGitHubUser } from './GitHubUserContext';
import UserRepositories from './UserRepositories';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const { fetchUserData } = useGitHubUser();

  const handleFetchUser = () => {
    fetchUserData(username);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleFetchUser}>Fetch User</button>
      <UserRepositories />
    </div>
  );
};

const WrappedApp: React.FC = () => (
  <GitHubUserProvider>
    <App />
  </GitHubUserProvider>
);

export default WrappedApp;
