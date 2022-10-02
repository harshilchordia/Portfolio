import React, { useRef, useState, useEffect } from "react";

import "./index.scss";

import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";

const Contact = () => {
	const refForm = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_jx88o0p", "template_3uttb4d", refForm.current, "6TGpPyZBSE7MgvunU")
			.then(
				(result) => {
					console.log(result.text);
					alert("Message successfully sent! I will get back to you as soon as possible :)");
					window.location.reload(false);
				},
				(error) => {
					console.log(error.text);
					console.log("printing error");

					alert("Failed to send the message, please try again.");
				}
			);
	};

	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = ["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);
	return (
		<div className="contactContainer" id="contact">
			<div className="contactForm">
				<h1>
					<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
				</h1>

				<form action="" ref={refForm} onSubmit={sendEmail}>
					<ul>
						<li className="half">
							<input type="text" name="name" placeholder="Name" required />
						</li>
						<li className="half">
							<input type="email" name="email" placeholder="Email" required />
						</li>
						<li>
							<input placeholder="Subject" type="text" name="subject" required />
						</li>
						<li>
							<textarea name="message" placeholder="Message" required></textarea>
						</li>
						<li>
							<input type="submit" className="button" value="Send Email" />
						</li>
					</ul>
				</form>
				<p>
					<br /> or <br /> <br />
					<a href="mailto:harshil.chordia@gmail.com">harshil.chordia@gmail.com</a>
				</p>
			</div>
		</div>
	);
};

export default Contact;
