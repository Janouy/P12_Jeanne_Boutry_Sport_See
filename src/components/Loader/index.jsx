import React from "react";
import Loading from "../../assets/loading.gif";
import styles from "./style.module.css";
function Loader() {
	return (
		<div className={styles.loader}>
			<img src={Loading} alt="loader" />
		</div>
	);
}

export default Loader;
