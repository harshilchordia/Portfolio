import React, { useState, useEffect } from "react";
import "./index.scss";

import AnimatedLetters from "../AnimatedLetters";
import instagram from "../../Images/socials/instagram.png";
import whatsapp from "../../Images/socials/whatsapp.png";
import snapchat from "../../Images/socials/snapchat.png";
import phone from "../../Images/socials/phone.png";
import money from "../../Images/socials/money.png";

const Socials = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = ["F", "i", "n", "d", " ", "m", "e"];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);
	return (
		<div className="socialsContainer">
			<h1>
				<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
			</h1>
			<div className="socialslinks">
				<ul>
					<li>
						<a href="https://www.instagram.com/harsheez/" target="_blank" className="button">
							<img src={instagram} alt="someting" /> Instagram
						</a>
					</li>
					<li>
						<a href="https://wa.me/447865297568" target="_blank" className="button">
							<img src={whatsapp} alt="someting" /> WhatsApp
						</a>
					</li>
					<li>
						<a
							href="https://www.snapchat.com/add/buttharshil?share_id=8ql_xWb4mYE&locale=en-US"
							target="_blank"
							className="button"
						>
							<img src={snapchat} alt="someting" /> Snapchat
						</a>
					</li>
					<li>
						<a href="https://monzo.me/harshilchordia/" target="_blank" className="button">
							<img src={money} alt="someting" /> Pay me
						</a>
					</li>
					<li>
						<a href="tel:+44 7865 297568" target="_blank" className="button">
							<img src={phone} alt="someting" /> Phone
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Socials;
