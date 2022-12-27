import React from "react";
import PropTypes from "prop-types";

/**
 * Display the connected user's performances
 * @param { array } connected user's performances
 * @return { HTMLElement }
 */

function Performances({ kind, performanceDatas }) {
	return <div className="col border mx-4">Performances</div>;
}
Performances.propTypes = {
	kind: PropTypes.object.isRequired,
	performanceDatas: PropTypes.array.isRequired,
};
export default Performances;
