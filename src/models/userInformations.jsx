import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbs from "../assets/carbs-icon.png";
import Fat from "../assets/fat-icon.png";
/**
 * @class representing user's informations
 */

export class UserInformations {
	/**
	 * @param {number} id - user's id
	 * @param {Object} userInfos - user's personal informations
	 * @param {number} averageScore - user's average score
	 * @param {Object} keyData - user's nutritionals informations
	 */
	constructor(id, userInfos, averageScore, keyData) {
		this.id = id;
		this.userInfos = userInfos;
		this.averageScore = averageScore;
		this.keyData = keyData;
	}

	/**
	 * Get the user's firstname value.
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
	 * Get user's nutritionals keyDatas
	 * @return {{data: string, icon: string}[]} The aray of nutritionals keydata value.
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
	 * Get the average score value.
	 * @return {{name: string, value: number}[]} user's average score in percent and user's score purpose in percent
	 */
	getDailyScoreInPercent() {
		return [
			{ name: "score", value: this.averageScore * 100 },
			{ name: "purpose", value: 100 - this.averageScore * 100 },
		];
	}
}
