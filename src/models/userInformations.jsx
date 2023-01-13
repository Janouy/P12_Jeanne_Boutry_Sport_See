import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbs from "../assets/carbs-icon.png";
import Fat from "../assets/fat-icon.png";
/**
 * @class representing an user
 */

export class UserInformations {
	/**
	 * @param {number} user's id
	 * @param {object} user's informations
	 * @param {number} user's lastScore
	 * @param {object} user's nutritionals informations
	 */
	constructor(id, userInfos, lastScore, keyData) {
		this.id = id;
		this.userInfos = userInfos;
		this.keyData = keyData;
		this.lastScore = lastScore;
	}

	/**
	 * Get the firstname value.
	 * @return {string} user's firstname value.
	 */
	getFirstName() {
		return this.userInfos.firstName;
	}
	/**
	 * Transform user's calories in kilocalories
	 * @return {number} The Kilocalories value.
	 */
	formatKiloCalories() {
		return Number.parseFloat(this.keyData.calorieCount / 1000).toFixed(3) + "Kcal";
	}

	/**
	 * Transform user's keyDatas
	 * @return {array} The aray of keydata value.
	 */
	getKeyDatas() {
		return [
			{ data: this.formatKiloCalories(), icon: Calories, name: "Calories" },
			{ data: this.keyData.proteinCount + "g", icon: Protein, name: "Proteines" },
			{ data: this.keyData.carbohydrateCount + "g", icon: Carbs, name: "Glucides" },
			{ data: this.keyData.lipidCount + "g", icon: Fat, name: "Lipides" },
		];
	}
	/**
	 * Get the last score value.
	 * @return {array} user's lastScore percent and user's purpose percent
	 */
	getDailyScoreInPercent() {
		return [
			{ name: "score", value: this.lastScore * 100 },
			{ name: "purpose", value: 100 - this.lastScore * 100 },
		];
	}
}
