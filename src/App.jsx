// // api to be use - https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user

import { useState } from 'react';
import HeaderContainer from './container/HeaderContainer';
import SearchContainer from './container/SearchContainer';
import UserContainer from './container/UserContainer';
import { Octokit } from 'octokit';
import defaultGithubUser from './data/default_user.json';

const App = () => {
  const [search, setSearch] = useState('');
  const [githubUser, setGithubUser] = useState(defaultGithubUser);
  const [noSearchResult, setNoSearchResult] = useState(false);

  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_USER_TOKEN,
  });

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
        setNoSearchResult(false);
      } else {
        throw new Error('Something went wrong fetching an user');
      }
    } catch (error) {
      setNoSearchResult(true);
    }
  }

  function handleGithubUser(username) {
    setSearch(username);
  }

  return (
    <>
      <div className='wrapper'>
        <HeaderContainer />
        <SearchContainer
          search={search}
          onChangeUser={handleGithubUser}
          onSearchUser={handleSubmitUser}
          noSearchResult={noSearchResult}
        />
        <UserContainer githubUser={githubUser} />
      </div>
    </>
  );
};

export default App;
