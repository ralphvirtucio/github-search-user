import { ThemeButton } from '../ThemeButton';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h1>devfinder</h1>

      <ThemeButton />
    </header>
  );
};
