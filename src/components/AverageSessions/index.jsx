import React from "react";
import PropTypes from "prop-types";

/**
 * Display the connected user's average sessions
 * @param { array } connected user's average sessions
 * @return { HTMLElement }
 */

function AverageSessions({ sessions }) {
	return (
		<div>
			{sessions.map((session, index) => (
				<div key={index}>
					{session.day}/{session.sessionLength}
				</div>
			))}
		</div>
	);
}
AverageSessions.propTypes = {
	sessions: PropTypes.array.isRequired,
};
export default AverageSessions;
