const { Button } = require("@/styles/pages/main.style");
const { useState } = require("react");

const Properties = ({ attributes }) => {
	const [seeMore, setSeeMore] = useState(true);

	return (
		<ul>
			{((seeMore ? attributes?.slice(0, 4) : attributes) || []).map(
				(attribute, index) => (
					<li key={index}>
						<div className="properties-main-block-inner">
							{/* <svg
                                                                width="13"
                                                                height="13"
                                                                viewBox="0 0 13 13"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M6.55178 11.063L1.64553 7.21924L0.551783 8.06299L6.55178 12.7192L12.5518 8.06299L11.458 7.21924L6.55178 11.063ZM6.55178 9.34424L11.458 5.53174L12.5518 4.68799L6.55178 0.0317383L0.551783 4.68799L1.64553 5.53174L6.55178 9.34424ZM6.55178 1.71924L10.3643 4.68799L6.55178 7.65674L2.73928 4.68799L6.55178 1.71924Z"
                                                                    fill="#191820"
                                                                />
                                                            </svg> */}
							<h5>
								{attribute?.trait_type} : {attribute?.value}
							</h5>
						</div>
					</li>
				)
			)}

			{attributes?.length > 4  && seeMore && (
				<li>
					<Button onClick={() => setSeeMore(!seeMore)}>
						See more
					</Button>
				</li>
			)}
		</ul>
	);
};

export default Properties;
