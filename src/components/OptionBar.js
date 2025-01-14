import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import '../style/optionBar.css';
import DesktopBar from './DesktopBar';
import MobileBar from './MobileBar';

const OptionBar = () => {
  const cart = useSelector((state) => state.cart);

  if (useMediaQuery('(min-width:650px)')) {
    return <DesktopBar cart={cart} />;
  }

  return <MobileBar />;
};

export default OptionBar;
