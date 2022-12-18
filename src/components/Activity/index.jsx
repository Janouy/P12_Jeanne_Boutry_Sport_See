import React from "react";
import PropTypes from "prop-types";

/**
 * Display the connected user's activities
 * @param { array } connected user's activities
 * @return { HTMLElement }
 */
function Activity({ sessions }) {
	return (
		<div>
			{sessions.map((session, index) => (
				<div key={index}>
					{session.day}/{session.kilogram}/{session.calories}
				</div>
			))}
		</div>
	);
}
Activity.propTypes = {
	sessions: PropTypes.array.isRequired,
};
export default Activity;
