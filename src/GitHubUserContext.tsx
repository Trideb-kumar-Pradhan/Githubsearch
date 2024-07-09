// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface User {
//   [key: string]: any;
// }

// interface GitHubUserContextProps {
//   users: { [key: string]: User };
//   addUser: (username: string, data: User) => void;
// }

// const GitHubUserContext = createContext<GitHubUserContextProps | undefined>(undefined);

// export const GitHubUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [users, setUsers] = useState<{ [key: string]: User }>({});

//   const addUser = (username: string, data: User) => {
//     setUsers((prevUsers) => ({ ...prevUsers, [username]: data }));
//   };

//   return (
//     <GitHubUserContext.Provider value={{ users, addUser }}>
//       {children}
//     </GitHubUserContext.Provider>
//   );
// };

// export const useGitHubUser = () => {
//   const context = useContext(GitHubUserContext);
//   if (!context) {
//     throw new Error('useGitHubUser must be used within a GitHubUserProvider');
//   }
//   return context;
// };
// src/GitHubUserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getGitHubUserData, getGitHubUserRepos, GitHubUser, GitHubRepo } from './githubApi';

interface GitHubUserContextType {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  fetchUserData: (username: string) => void;
}

const GitHubUserContext = createContext<GitHubUserContextType | undefined>(undefined);

export const GitHubUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  const fetchUserData = async (username: string) => {
    try {
      const userData = await getGitHubUserData(username);
      setUser(userData);
      const userRepos = await getGitHubUserRepos(username);
      setRepos(userRepos);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <GitHubUserContext.Provider value={{ user, repos, fetchUserData }}>
      {children}
    </GitHubUserContext.Provider>
  );
};

export const useGitHubUser = (): GitHubUserContextType => {
  const context = useContext(GitHubUserContext);
  if (!context) {
    throw new Error('useGitHubUser must be used within a GitHubUserProvider');
  }
  return context;
};
