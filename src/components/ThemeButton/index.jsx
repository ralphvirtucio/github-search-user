import { useState } from 'react';
import { IconMoon } from '../../assets/IconMoon';
import { IconSun } from '../../assets/IconSun';
import './ThemeButton.scss';

export const ThemeButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleIsChecked(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <div
      role='button'
      tabIndex={0}>
      <p>{String(isChecked)}</p>
      <input
        className='theme__button--checkbox'
        type='checkbox'
        id='light-dark-mode'
        value={isChecked}
        onChange={handleIsChecked}
      />
      <label
        htmlFor='light-dark-mode'
        className='theme__button'>
        {!isChecked ? 'Dark' : 'Light'}
        <span>{!isChecked ? <IconMoon /> : <IconSun />}</span>
      </label>
    </div>
  );
};
