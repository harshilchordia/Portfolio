import React, { useState, ReactDOM, useEffect } from "react";
import Listing from "./Listing";
import Modal from "./Modal";
import Overlay from "./Overlay";
import { AnimatePresence } from "framer-motion";

import { useLocation, useSearchParams } from "react-router-dom";

const Card = ({ data }) => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	const useOpenModalByID = () => {
		const [searchParams, setSearchParams] = useSearchParams();
		const proj_ID = searchParams.get("proj_ID");

		useEffect(() => {
			if (data.id === parseInt(proj_ID)) {
				setOpen(true);
				setSearchParams();
			}
		});
	};

	// for opening Modal by URL search param ? format= byharshil.web.app/?proj_ID=2#projects
	useOpenModalByID();

	return (
		<>
			<Listing data={data} open={openModal} />

			<AnimatePresence>
				{open && <Overlay close={closeModal}>{<Modal data={data} close={closeModal} />}</Overlay>}
			</AnimatePresence>
		</>
	);
};

export default Card;
