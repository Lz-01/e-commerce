import {
    Badge, IconButton, InputBase, Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import logo from '../assets/logos/logo.png';
import 'react-notifications/lib/notifications.css';
import createNotification from './shared/Notifications';

const DesktopBar = (props) => {
    const { cart } = props;

    return (
        <div className="option-bar">
            <IconButton aria-label="delete">
                <Link to="e-commerce/" className="link">
                    <img className="e-com" src={logo} alt="e commerce logo" />
                </Link>
            </IconButton>
            <div className="country-input">
                <IconButton
                    type="button"
                    sx={{ px: '10px' }}
                    aria-label="search"
                    onClick={createNotification('info')}
                    disabled
                >
                    <AddLocationAltIcon color="primary." />
                </IconButton>
            </div>
            <div className="search-bar">
                <Paper onClick={createNotification('info')}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Item"
                        inputProps={{ 'aria-label': 'search item' }}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: '10px' }}
                        aria-label="search"
                        disabled
                    >
                        <SearchIcon color="primary." />
                    </IconButton>
                </Paper>
            </div>
            <div className="language">
                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={createNotification('info')}
                    disabled
                >
                    <LanguageIcon color="primary." />
                </IconButton>
            </div>
            <div className="log-menu">
                <Link to="profile" className="link">
                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={createNotification('info')}
                    disabled
                >
                    <AccountCircle color="primary.darker" />
                </IconButton>
                </Link>
            </div>
            <div className="cart">
                <Badge badgeContent={cart.length} color="primary">
                    <Cart items={cart} />
                </Badge>
            </div>
        </div>
    );
};

DesktopBar.propTypes = {
    cart: PropTypes.instanceOf(Array),
};

DesktopBar.defaultProps = {
    cart: [],
};
export default DesktopBar;
