import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import coffeeBanner from '../../assets/coffeebanner.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>CoffeeShop</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={coffeeBanner} alt='Delicious coffee beans' />
        </div>
    </Fragment>
};

export default Header;