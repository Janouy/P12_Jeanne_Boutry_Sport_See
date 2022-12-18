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
		return Number.parseFloat(this.keyData.calorieCount / 1000).toFixed(3);
	}
	/**
	 * Get the user's protein value.
	 * @return {number} The protein value.
	 */
	getProtein() {
		return this.keyData.proteinCount;
	}
	/**
	 * Get the user's carbohydrate value.
	 * @return {number} The carbohydrate value.
	 */
	getCarbohydrate() {
		return this.keyData.carbohydrateCount;
	}
	/**
	 * Get the user's lipid value.
	 * @return {number} The lipid value.
	 */
	getLipid() {
		return this.keyData.lipidCount;
	}
	/**
	 * Get the last score value.
	 * @return {number} The last score value.
	 */

	getLastScore() {
		return this.lastScore;
	}
}
