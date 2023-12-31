// // api to be use - https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user

import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import { ThemeContext } from './contexts/Context';
import HeaderContainer from './container/HeaderContainer';
import SearchContainer from './container/SearchContainer';
import UserContainer from './container/UserContainer';

const App = () => {
  const [search, setSearch] = useState('');
  const [githubUser, setGithubUser] = useState(null);
  const [noSearchResult, setNoSearchResult] = useState(false);
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(false);

  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_USER_TOKEN,
  });

  useEffect(() => {
    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_USER_TOKEN,
    });

    const getUserOctocat = async () => {
      try {
        setLoading(true);
        const response = await octokit.request('GET /users/{username}', {
          username: 'octocat',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });
        if (response.status === 200) {
          setGithubUser(response.data);
          setLoading(false);
        } else {
          throw new Error('Something went wrong fetching an user');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserOctocat();
  }, []);

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
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <div className='container'>
            <div>
              <HeaderContainer />
              <SearchContainer
                search={search}
                onChangeUser={handleGithubUser}
                onSearchUser={handleSubmitUser}
                noSearchResult={noSearchResult}
              />
              <UserContainer
                githubUser={githubUser}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
