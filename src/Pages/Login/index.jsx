import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

function Login() {
	const navigate = useNavigate();
	const handleChange = (e) => {
		navigate(`/${e.target.value}`);
	};
	return (
		<div className={styles.login}>
			<div>
				<img className={styles.logo} src={Logo} alt="Logo SportSee" />
			</div>
			<div className={styles.text}>Bonjour ! Veuillez choisir un identifiant svp: </div>
			<select
				className={`${styles.selectForm} form-select`}
				aria-label="Default select example"
				onChange={handleChange}
			>
				<option value="id">Choisir un id</option>
				<option value="12">12</option>
				<option value="18">18</option>
			</select>
		</div>
	);
}

export default Login;
