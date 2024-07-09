// import React from 'react';
// import { useGitHubUser } from './GitHubUserContext';

// interface UserRepositoriesProps {
//   username: string;
// }

// const UserRepositories: React.FC<UserRepositoriesProps> = ({ username }) => {
//   const { users } = useGitHubUser();
//   const user = users[username];

//   if (!user) return <p>No user data available</p>;

//   return (
//     <div>
//       <h2>{user.name}'s Repositories</h2>
//       <img src={user.avatar_url} alt={user.name} />
//       <p>{user.bio}</p>
//       <ul>
//         {user.repos.map((repo: any) => (
//           <li key={repo.id}>{repo.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserRepositories;
// src/UserRepositories.tsx
import React from 'react';
import { useGitHubUser } from './GitHubUserContext';

const UserRepositories: React.FC = () => {
  const { repos } = useGitHubUser();

  if (!repos.length) {
    return <p>No repositories available</p>;
  }

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;
