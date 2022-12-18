import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import PropTypes from "prop-types";

/**
 * Display the connected user's key datas
 * @param { number } connected user calories
 * @param { number } connected user protein
 * @param { number } connected user carbohydrate
 * @param { number } connected user lipid
 * @return { HTMLElement }
 */
function KeyDatas({ calories, protein, carbohydrate, lipid }) {
	const [userKeyDatas, setUserKeyDatas] = useState();
	useEffect(() => {
		if (calories !== undefined) {
			setUserKeyDatas(calories);
		}
	}, [calories]);

	return (
		<>
			{!userKeyDatas ? (
				<Loader />
			) : (
				<div>
					{calories}kCal/{protein}g/{carbohydrate}g/{lipid}g
				</div>
			)}
		</>
	);
}

KeyDatas.propTypes = {
	calories: PropTypes.string.isRequired,
	protein: PropTypes.number.isRequired,
	carbohydrate: PropTypes.number.isRequired,
	lipid: PropTypes.number.isRequired,
};

export default KeyDatas;