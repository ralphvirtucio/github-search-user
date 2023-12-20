// // api to be use - https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user

import { useEffect, useState } from 'react';
import HeaderContainer from './container/HeaderContainer';
import SearchContainer from './container/SearchContainer';
import UserContainer from './container/UserContainer';
import { Octokit } from 'octokit';
import defaultGithubUser from './data/default_user.json';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_USER_TOKEN,
});

const App = () => {
  const [search, setSearch] = useState('octocat');
  const [githubUser, setGithubUser] = useState(defaultGithubUser);

  async function handleSubmitUser(e) {
    e.preventDefault();

    try {
      const response = await octokit.request('GET /users/{username}', {
        username: search,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });

      if (response.status === 200) {
        setGithubUser(response.data);
      } else {
        throw new Error('Something went wrong fetching an user');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleGithubUser(username) {
    setSearch(username);
  }

  return (
    <>
      <HeaderContainer />
      <SearchContainer
        search={search}
        onChangeUser={handleGithubUser}
        onSearchUser={handleSubmitUser}
      />
      <UserContainer githubUser={githubUser} />
    </>
  );
};

export default App;
