import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

/**
 * Display the connected user's key datas
 * @param { array } connected user's keydata
 * @return { HTMLElement }
 */
function KeyDatas({ KeyData }) {
	return (
		<div className={styles.KeyDataWrapper}>
			{KeyData.map((data, index) => (
				<div className={styles.KeyDatas} key={index}>
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

KeyDatas.propTypes = {
	KeyData: PropTypes.array.isRequired,
};

export default KeyDatas;
