
// // api to be use - https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user

import HeaderContainer from "./container/HeaderContainer";
import SearchContainer from "./container/SearchContainer";
import UserContainer from "./container/UserContainer";

const App = () => {

  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      <UserContainer  />
    </>
  )
}

export default App;