import { useTheme } from '@/app/providers/ThemeProvider';
import { themeIcons } from '@/shared/assets';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={'30px'}
      alt='themeIcon'
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
