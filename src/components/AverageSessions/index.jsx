import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";

/**
 * Display the connected user's average sessions
 * @param { array } connected user's average sessions
 * @return { HTMLElement }
 */

function AverageSessions({ sessions }) {
	const [userSessions, setUserSessions] = useState();
	useEffect(() => {
		if (sessions !== undefined) {
			setUserSessions(sessions);
		}
	}, [sessions]);
	return (
		<div>
			{!userSessions ? (
				<Loader />
			) : (
				userSessions.map((session, index) => (
					<div key={index}>
						{session.day}/{session.sessionLength}
					</div>
				))
			)}
		</div>
	);
}
AverageSessions.propTypes = {
	sessions: PropTypes.array.isRequired,
};
export default AverageSessions;
