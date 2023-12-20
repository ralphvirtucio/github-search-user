import { User } from '../components/User/User';

const UserContainer = ({ githubUser }) => {
  return <User data={githubUser} />;
};

export default UserContainer;
