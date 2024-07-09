// src/githubApi.ts

const GITHUB_API_URL = 'https://api.github.com/users/';

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  // add more fields as needed
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  // add more fields as needed
}

export async function getGitHubUserData(username: string): Promise<GitHubUser> {
  try {
    const response = await fetch(`${GITHUB_API_URL}${username}`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data: GitHubUser = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
}

export async function getGitHubUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}${username}/repos`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data: GitHubRepo[] = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
}
