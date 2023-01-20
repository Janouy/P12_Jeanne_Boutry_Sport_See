import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

/**
 * Display the connected user's nutritional informations in a card
 * @param { Array} connected user's nutritionals informations
 * @return { HTMLElement } a card with the nutritinal infos name and its informations ans its icon
 */
function NutritionalsInformations({ KeyData }) {
	return (
		<div className={`${styles.KeyDataWrapper} d-flex flex-column justify-content-between`}>
			{KeyData.map((data, index) => (
				<div className={`${styles.KeyDatas} d-flex align-items-center`} key={index}>
					<div>
						<img className={styles.keyDataLogo} src={data.icon} alt="calories icon" />
					</div>
					<div className={styles.keydataData}>
						{data.data}
						<div className={styles.keydataName}>{data.name}</div>
					</div>
				</div>
			))}
		</div>
	);
}

NutritionalsInformations.propTypes = {
	KeyData: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				data: PropTypes.string.isRequired,
				icon: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			}),
		]),
	),
};

export default NutritionalsInformations;
