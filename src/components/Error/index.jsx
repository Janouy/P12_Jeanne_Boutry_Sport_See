import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

function Error() {
	return (
		<div>
			<div>
				<img className={styles.logo} src={Logo} alt="Logo SportSee" />
			</div>
			<div className={styles.text}>
				<h2>Il semblerait qu'il y ait un problème, merci de réessayer ultérieurement. </h2>
			</div>
			<Link className={styles.link} to="/">
				Retour vers la page d'identification
			</Link>
		</div>
	);
}

export default Error;
