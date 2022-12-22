import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbs from "../assets/carbs-icon.png";
import Fat from "../assets/fat-icon.png";
/**
 * @class representing an user
 */

export class User {
	/**
	 * @param {number} id
	 * @param {object} userInfos
	 * @param {number} lastScore
	 * @param {object} keyData
	 */
	constructor(id, userInfos, lastScore, keyData) {
		this.id = id;
		this.userInfos = userInfos;
		this.keyData = keyData;
		this.lastScore = lastScore;
	}

	/**
	 * Get the firstname value.
	 * @return {string} The firstname value.
	 */
	getFirstName() {
		return this.userInfos.firstName;
	}
	/**
	 * Transform user's calories in kilocalories
	 * @return {number} The Kilocalories value.
	 */
	getKiloCalories() {
		return Number.parseFloat(this.keyData.calorieCount / 1000).toFixed(3) + "Kcal";
	}
	/**
	 * Get the user's protein value.
	 * @return {number} The protein value.
	 */
	getProtein() {
		return this.keyData.proteinCount + "g";
	}
	/**
	 * Get the user's carbohydrate value.
	 * @return {number} The carbohydrate value.
	 */
	getCarbohydrate() {
		return this.keyData.carbohydrateCount + "g";
	}
	/**
	 * Get the user's lipid value.
	 * @return {number} The lipid value.
	 */
	getLipid() {
		return this.keyData.lipidCount + "g";
	}
	/**
	 * Transform user's keyDatas
	 * @return {array} The araay of keydata value.
	 */
	getKeyDatas() {
		return [
			{ data: this.getKiloCalories(), icon: Calories, name: "Calories" },
			{ data: this.getProtein(), icon: Protein, name: "Proteines" },
			{ data: this.getCarbohydrate(), icon: Carbs, name: "Glucides" },
			{ data: this.getLipid(), icon: Fat, name: "Lipides" },
		];
	}
	/**
	 * Get the last score value.
	 * @return {number} The last score value.
	 */
	getLastScore() {
		return this.lastScore;
	}
}
