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
  formatCreatedDate,
  companyLink,
  twitterLink,
  loading,
}) => {
  return (
    <>
      <main className='user'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section className='user__profile'>
            <img
              src={data?.avatar_url}
              alt={data?.name}
            />

            <div className='user__profile-info'>
              <div className='user__profile-info--names'>
                <h1>{formatName(data?.name)}</h1>
                <p className='user__profile-info-login'>@{data?.login}</p>
              </div>

              <p className='user__profile-info--created_at'>
                Joined {formatCreatedDate(data?.created_at)}
              </p>
            </div>

            <div
              className={`user__profile-bio ${isFieldEmptyClassName(
                data?.bio
              )}`}>
              <p>{formatBio(data?.bio)}</p>
            </div>

            <div className='user__profile-stats-links'>
              <ul className='user__profile-stats'>
                <li>
                  <h4>Repos</h4>
                  <p>{data?.public_repos}</p>
                </li>
                <li>
                  <h4>Followers</h4>
                  <p>{data?.followers}</p>
                </li>
                <li>
                  <h4>Following</h4>
                  <p>{data?.following}</p>
                </li>
              </ul>

              <div className='user__profile-link'>
                <ul className='user__profile-link-list'>
                  <li className={isFieldEmptyClassName(data?.location)}>
                    <span>
                      <IconLocation />
                    </span>
                    <p>{formatLink(data?.location)}</p>
                  </li>
                  <li className={isFieldEmptyClassName(data?.blog)}>
                    <span>
                      <IconLink />
                    </span>
                    <a
                      href={!data?.blog ? null : data.blog}
                      target={!data?.blog ? null : '_blank'}
                      rel={!data?.blog ? null : 'noreferrer'}
                      aria-disabled={!data?.blog ? 'true' : 'false'}>
                      {formatLink(data?.blog)}
                    </a>
                  </li>
                  <li className={isFieldEmptyClassName(data?.twitter_username)}>
                    <span>
                      <IconTwitter />
                    </span>
                    <a
                      href={twitterLink(data?.twitter_username)}
                      target={!data?.twitter_username ? null : '_blank'}
                      rel={!data?.twitter_username ? null : 'noreferrer'}
                      aria-disabled={
                        !data?.twitter_username ? 'true' : 'false'
                      }>
                      {formatLink(data?.twitter_username)}
                    </a>
                  </li>
                  <li className={isFieldEmptyClassName(data?.company)}>
                    <span>
                      <IconCompany />
                    </span>

                    <a
                      href={companyLink(data?.company)}
                      target={!data?.company ? null : '_blank'}
                      rel={!data?.company ? null : 'noreferrer'}
                      aria-disabled={!data?.company ? 'true' : 'false'}>
                      {formatLink(data?.company)}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
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
  companyLink: PropTypes.func,
  twitterLink: PropTypes.func,
  formatCreatedDate: PropTypes.func,
  loading: PropTypes.bool,
};
