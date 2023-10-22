// Filename - components/Footer.js

import React from "react";

/*import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles.js"; */
import "./Footerstyle.css";

const Footer = () => {
	return (
		<div className="box">
			{/*<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
			</h1>*/}
			<div className="footercontainer">
				<div className="row">
					<div className="column">
                    <img src="/img/bblogo.png" alt="logo" />
		            </div>
					<div className="column">
						<div className="heading">About Us</div>
						<div className="footerlink" href="#">
							Aim
						</div>
						<div className="footerlink" href="#">
							Vision
						</div>
						<div className="footerlink" href="#">
							Testimonials
						</div>
					</div>
					<div className="column">
						<div className="heading">Services</div>
						<div className="footerlink" href="#">
							Writing
						</div>
						<div className="footerlink" href="#">
							Internships
						</div>
						<div className="footerlink" href="#">
							Coding
						</div>
						<div className="footerlink" href="#">
							Teaching
						</div>
					</div>
					<div className="column">
						<div className="heading">Contact Us</div>
						<div className="footerlink" href="#">
							Uttar Pradesh
						</div>
						<div className="footerlink" href="#">
							Ahemdabad
						</div>
						<div className="footerlink" href="#">
							Indore
						</div>
						<div className="footerlink" href="#">
							Mumbai
						</div>
					</div>
					<div className="column">
						<div className="heading">Social Media</div>
						<div className="footerlink" href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</div>
						<div className="footerlink" href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</div>
						<div className="footerlink" href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</div>
						<div className="footerlink" href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
