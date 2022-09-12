import React from "react";
import "./Modal.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Modal = ({ data, close }) => {
	const { imageUrl, price, address, description } = data;

	const modalVariants = {
		open: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.2 } },
		closed: { opacity: 0 },
	};

	const imageVariants = {
		open: { opacity: 1, y: "0vh" },
		closed: { opacity: 0, y: "-10vhxs" },
	};

	const modalInfoVariants = {
		open: { opacity: 1, transition: { staggerChildren: 0.2 } },
		closed: { opacity: 0 },
	};

	const modalRowVariants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "10%" },
	};
	return (
		<motion.div className="modal" onClick={(e) => e.stopPropagation()} variants={modalVariants}>
			<motion.img
				className="modal_image"
				alt="Project image"
				src={imageUrl}
				variants={imageVariants}
			/>
			<motion.div className="modal_info" variants={modalInfoVariants}>
				<motion.div className="modal_row" variants={modalRowVariants}>
					<span className="modal_price">{price}</span>
				</motion.div>
				<motion.div className="modal_description-wrapper" variants={modalRowVariants}>
					<p className="modal_description">{description}</p>
				</motion.div>
				<motion.button className="modal_close-wrapper" onClick={close} whileHover={{ scale: 1.2 }}>
					<IoCloseCircleOutline className="modal_close-icon" />
				</motion.button>
			</motion.div>
		</motion.div>
	);
};

export default Modal;
