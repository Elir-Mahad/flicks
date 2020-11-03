import React from "react";
import "./Header.css";
import flickss from "./Assets/flickss.png";

// material ui icons
// import HomeIcon from "@material-ui/icons/Home";
// import FlashOnIcon from "@material-ui/icons/FlashOn";
// import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
// import SearchIcon from "@material-ui/icons/Search";
// import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
	return (
		<div className="header">
			<img
				className="logo_small"
				src={flickss}
				alt=""
				//
			/>
			{/* <div className="header_icons">
				<div className="header_icon header_icon--active">
					The 'home' p tag, is always visible, 
					so we added the 'header_icon--active' 
					to target it in the css
					<HomeIcon />
					<p> Home </p>
				</div>
				<div className="header_icon ">
					<FlashOnIcon />
					<p>Trending</p>
				</div>
				<div className="header_icon remove_icon">
					<VideoLibraryIcon />
					<p>Collections</p>
				</div>
				<div className="header_icon remove_icon">
					<SearchIcon />
					<p>Search</p>
				</div>
				<div className="header_icon remove_icon">
					<PersonOutlineIcon />
					<p>Account</p>
				</div>
			</div> */}
		</div>
	);
}

export default Header;
