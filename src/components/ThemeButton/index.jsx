import { useContext, useState } from 'react';
import { IconMoon } from '../../assets/IconMoon';
import { IconSun } from '../../assets/IconSun';
import './ThemeButton.scss';
import { ThemeContext } from '../../contexts/Context';

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggleTheme() {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  }

  let buttonThemeContent;
  if (theme === 'light') {
    buttonThemeContent = (
      <>
        Dark
        <span>
          <IconMoon />
        </span>
      </>
    );
  } else {
    buttonThemeContent = (
      <>
        Light
        <span>
          <IconSun />
        </span>
      </>
    );
  }

  return (
    <>
      <button
        className='theme__button'
        type='button'
        aria-pressed={theme}
        onClick={handleToggleTheme}>
        {buttonThemeContent}
      </button>
    </>
  );
};
