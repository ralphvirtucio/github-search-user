import { IconMoon } from '../../assets/IconMoon';

export const ThemeButton = () => {
  return (
    <div>
      <label htmlFor='light-dark-mode'>
        Dark
        <IconMoon />
      </label>
      <input
        type='checkbox'
        id='light-dark-mode'
      />
    </div>
  );
};
