import { User } from '../components/User/User';
import PropTypes from 'prop-types';

const UserContainer = ({ githubUser }) => {
  function formatName(name) {
    if (name) {
      return name;
    } else {
      return githubUser.login;
    }
  }

  function formatBio(bio) {
    if (bio) {
      return bio;
    } else {
      return 'This profile has no bio';
    }
  }

  function formatLink(link) {
    if (link) {
      return link;
    } else {
      return 'Not Available';
    }
  }

  function isFieldEmptyClassName(fieldValue) {
    if (fieldValue) {
      return '';
    } else {
      return 'field_empty';
    }
  }

  function linkDisableAttr(link, href = '#') {
    if (link) {
      return {
        href,
        ariaDisabled: 'false',
        role: 'link',
      };
    } else {
      return {
        role: 'link',
        ariaDisabled: 'true',
      };
    }
  }

  const shortenMonths = (month) => {
    if (month.length === 3) {
      return month;
    } else {
      return month.slice(0, 3);
    }
  };

  function formatCreatedDate(createdDate) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(createdDate);
    const year = date?.getFullYear();
    const dateMonth = date?.getDate();
    const indexOfMonth = date?.getMonth();
    const shortenedMonth = shortenMonths(monthNames[indexOfMonth]);

    return `${dateMonth} ${shortenedMonth} ${year}`;
  }

  return (
    <User
      data={githubUser}
      formatName={formatName}
      formatBio={formatBio}
      formatLink={formatLink}
      isFieldEmptyClassName={isFieldEmptyClassName}
      linkDisableAttr={linkDisableAttr}
      formatCreatedDate={formatCreatedDate}
    />
  );
};

UserContainer.propTypes = {
  githubUser: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    created_at: PropTypes.string,
    login: PropTypes.string,
    bio: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    location: PropTypes.string,
    twitter_username: PropTypes.string,
    blog: PropTypes.string,
    company: PropTypes.string,
  }),
};

export default UserContainer;
