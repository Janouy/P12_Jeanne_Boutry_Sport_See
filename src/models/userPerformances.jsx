/**
 * @class representing one user's performances
 */

export class UserPerformances {
	/**
	 * @param {number} id
	 * @param {object} kind
	 * @param {array} data
	 */
	constructor(userId, kind, data) {
		this.userId = userId;
		this.kind = kind;
		this.data = data;
	}

	/**
	 * Get kind values.
	 * @return {object} kind values
	 */
	getKind() {
		return this.kind;
	}

	/**
	 * Get data values.
	 * @return {array} data values
	 */
	getData() {
		return this.data;
	}
}
