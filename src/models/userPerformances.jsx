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
	 * Get data values.
	 * @return {array} data values
	 */
	getPerformancesDatas() {
		//order datas by kind
		this.data.sort((a, b) => a.kind - b.kind);
		//replace the number by the name of the kind
		this.data.forEach((data, index) => (data["kind"] = this.kind[index + 1]));
		return this.data;
	}
}
