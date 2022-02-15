
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { useDarkMode } from '../hooks/useDarkMode';

export const TopNavigation = () => (
  <div className="top-navigation">
    <FaHashtag size="20" className="title-hashtag" />
    <h5 className="title-text">tailwind-css</h5>
    <ThemeIcon />
  </div>
);

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};