import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Properties from "./Properties";
import OwnersModel from "./Model/OwnersModel";

const ItemDetailsSection = ({ item }) => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleHide = () => setShow(false);

	return (
		<div className="accordian-block">
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<div className="header-svg-block">
							<svg
								width="20"
								height="16"
								viewBox="0 0 20 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3 13H17V11H3V13ZM3 9H17V7H3V9ZM3 5H13V3H3V5ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V2H2V14Z"
									fill="#191820"
								/>
							</svg>
							<h3>Details</h3>
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<div className="body-block-inner">
							<div className="details-block-main">
								<div className="create-author-block">
									<div className="create-author-block-profile">
										<h4>Owner</h4>
										<div
											onClick={handleShow}
											className="create-author-block-title pointer"
										>
											<img
												src={
													item?.owners[0]?.userLogo ||
													"/images/user.svg"
												}
												alt="item-img"
											></img>
											<h4>{item?.owners[0]?.name}</h4>
										</div>
										<OwnersModel
											owners={item?.owners}
											show={show}
											handleClose={handleHide}
										/>
									</div>
									<div className="create-author-block-profile">
										<h4>Creator</h4>
										<div className="create-author-block-title">
											<img
												src={
													item?.creatorLogo ||
													"/images/user.svg"
												}
												alt="item-img"
											></img>
											<h4>{item?.creatorName}</h4>
										</div>
									</div>
								</div>
								<div className="properties-main">
									<h4>Attributes</h4>
									<div className="properties-main-block">
										<Properties
											attributes={item?.attributes}
										/>
									</div>
								</div>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default ItemDetailsSection;
