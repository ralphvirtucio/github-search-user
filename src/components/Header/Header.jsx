import { IconMoon } from '../../assets/IconMoon';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h1>devfinder</h1>

      <div>
        <label htmlFor='light-dark-mode'>
          Dark
          <IconMoon />
        </label>
        <input type='checkbox' id='light-dark-mode' />
      </div>
    </header>
  );
};
