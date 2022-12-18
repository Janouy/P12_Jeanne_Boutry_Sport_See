import React from "react";
import PropTypes from "prop-types";

/**
 * Display the connected user's last score
 * @param { number } connected user data
 * @return { HTMLElement }
 */
function Score({ lastScore }) {
	return <div>{lastScore}</div>;
}

Score.propTypes = {
	lastScore: PropTypes.number.isRequired,
};

export default Score;
