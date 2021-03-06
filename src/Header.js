import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
	return (
		<nav className="header">
			{/* logo on the left => img */}
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			{/* Searchbar */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header_searchIcon" />
			</div>

			{/* 3 Links */}
			<div className="header__nav">
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Hello, George</span>
						<span className="header__optionLineTwo">Sign In</span>
					</div>
				</Link>
			</div>

			<Link to="/" className="header__link">
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
			</Link>

			<Link to="/" className="header__link">
				<div className="header__option">
					<span className="header__optionLineOne">Your </span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
			</Link>

			{/* Basket icon with number */}
			<Link to="/checkout" className="header__link">
				<div className="header__optionBasket">
					{/* Shopping basket icon */}
					<ShoppingBasketIcon />
					{/* Number of items in the basket */}
					<span className="header__optionLineTwo header__basketCount">0</span>
				</div>
			</Link>
		</nav>
	);
}

export default Header;
