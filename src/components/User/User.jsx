import PropTypes from 'prop-types';
import { IconLocation } from '../../assets/IconLocation';
import { IconTwitter } from '../../assets/IconTwitter';
import { IconCompany } from '../../assets/IconCompany';
import { IconWebsite as IconLink } from '../../assets/IconWebsite';
import './User.scss';

export const User = ({ data }) => {
  return (
    <>
      <main className='user'>
        <section className='user__profile'>
          <img
            src={data.avatar_url}
            alt={data.name}
          />

          <div className='user__profile-name'>
            <h1>{data.name}</h1>
            <p className='user__profile-name-login'>@{data.login}</p>

            {/* <p>{data.created_at}</p> */}
            <p>Joined 25 Jan 2011</p>
          </div>

          <div className='user__profile-bio'>
            <p>
            {data.bio}
            </p>
          </div>

          <div className='user__profile-stats-links'>
            <ul className='user__profile-stats'>
              <li>
                <h4>Repos</h4>
                <p>{data.public_repos}</p>
              </li>
              <li>
                <h4>Followers</h4>
                <p>{data.followers}</p>
              </li>
              <li>
                <h4>Following</h4>
                <p>{data.following}</p>
              </li>
            </ul>

            <div className='user__profile-link'>
              <ul className='user__profile-link-list'>
                <li>
                  <span>
                    <IconLocation />
                  </span>
                  <p>{data.location}</p>
                </li>
                <li>
                  <span>
                    <IconLink />
                  </span>
                  <a href={data.blog}>{data.blog}</a>
                </li>
                <li>
                  <span>
                    <IconTwitter />
                  </span>
                  <a href='#'>{data.twitter_username}</a>
                </li>
                <li>
                  <span>
                    <IconCompany />
                  </span>
                  <a href='#'>{data.company}</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

User.propTypes = {
  data: PropTypes.shape({
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
