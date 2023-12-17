import {User} from '../components/User/User';
import githubUserData from '../../data/sample-user-response.json';



const UserContainer = () => {
  return <User data={githubUserData} />
}

export default UserContainer;