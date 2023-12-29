import PropTypes from 'prop-types';
import { IconLocation } from '../../assets/IconLocation';
import { IconTwitter } from '../../assets/IconTwitter';
import { IconCompany } from '../../assets/IconCompany';
import { IconWebsite as IconLink } from '../../assets/IconWebsite';
import './User.scss';

export const User = ({
  data,
  formatName,
  formatBio,
  formatLink,
  isFieldEmptyClassName,
  linkDisableAttr,
  formatCreatedDate,
}) => {
  return (
    <>
      <main className='user'>
        <section className='user__profile'>
          <img
            src={data.avatar_url}
            alt={data.name}
          />

          <div className='user__profile-name'>
            <h1>{formatName(data.name)}</h1>
            <p className='user__profile-name-login'>@{data.login}</p>

            <p>Joined {formatCreatedDate(data.created_at)}</p>
          </div>

          <div
            className={`user__profile-bio ${isFieldEmptyClassName(data.bio)}`}>
            <p>{formatBio(data.bio)}</p>
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
                <li className={isFieldEmptyClassName(data.location)}>
                  <span>
                    <IconLocation />
                  </span>
                  <p>{formatLink(data.location)}</p>
                </li>
                <li className={isFieldEmptyClassName(data.blog)}>
                  <span>
                    <IconLink />
                  </span>
                  <a
                    href={linkDisableAttr(data.blog, data.blog).href}
                    role={linkDisableAttr(data.blog).role}
                    aria-disabled={linkDisableAttr(data.blog).ariaDisabled}>
                    {formatLink(data.blog)}
                  </a>
                </li>
                <li className={isFieldEmptyClassName(data.twitter_username)}>
                  <span>
                    <IconTwitter />
                  </span>
                  <a
                    href={linkDisableAttr(data.twitter_username).href}
                    role={linkDisableAttr(data.twitter_username).role}
                    aria-disabled={
                      linkDisableAttr(data.twitter_username).ariaDisabled
                    }>
                    {formatLink(data.twitter_username)}
                  </a>
                </li>
                <li className={isFieldEmptyClassName(data.company)}>
                  <span>
                    <IconCompany />
                  </span>
                  <a
                    href={linkDisableAttr(data.company).href}
                    role={linkDisableAttr(data.company).role}
                    aria-disabled={linkDisableAttr(data.company).ariaDisabled}>
                    {formatLink(data.company)}
                  </a>
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
  formatName: PropTypes.func,
  formatBio: PropTypes.func,
  formatLink: PropTypes.func,
  isFieldEmptyClassName: PropTypes.func,
  linkDisableAttr: PropTypes.func,
  formatCreatedDate: PropTypes.func,
};
