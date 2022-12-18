import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";

/**
 * Display the connected user's last score
 * @param { number } connected user data
 * @return { HTMLElement }
 */
function Score({ lastScore }) {
	const [score, setScore] = useState();
	useEffect(() => {
		if (lastScore !== undefined) {
			setScore(lastScore);
		}
	}, [lastScore]);

	return <div>{!score ? <Loader /> : score}</div>;
}

Score.propTypes = {
	lastScore: PropTypes.number.isRequired,
};

export default Score;
