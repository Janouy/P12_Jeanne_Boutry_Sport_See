import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

/**
 * Display the connected user's nutritional informations
 * @param { array } connected user's nutritionals informations
 * @return { HTMLElement }
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
	KeyData: PropTypes.array.isRequired,
};

export default NutritionalsInformations;
