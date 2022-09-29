import React from "react";
import "./Listing.scss";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
	const { posterUrl, Heading, small_des } = data;
	return (
		<motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
			<div className="listing_content">
				<div className="listing_image-container">
					<img className="listing_image" src={posterUrl} alt="Project picture" />
				</div>
				<div className="listing_details">
					<div className="listing_row">
						<span className="listing_heading">{Heading}</span>
					</div>
					<div className="listing_row">
						<span className="listing_description">{small_des}</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Listing;
