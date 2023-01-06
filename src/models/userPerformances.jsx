/**
 * @class representing one user's performances
 */

export class UserPerformances {
	/**
	 * @param {number} user's id
	 * @param {object} kind of perfomances
	 * @param {array} user's performances value
	 */
	constructor(userId, kind, data) {
		this.userId = userId;
		this.kind = kind;
		this.data = data;
	}

	/**
	 * Get data values.
	 * @return {array} user's performances values
	 */
	getFormatedPerformancesDatas() {
		//order datas by kind
		this.data.sort((a, b) => a.kind - b.kind);
		//replace the number by the name of the corresponding kind of performance
		this.data.forEach((data, index) => (data["kind"] = this.kind[index + 1]));
		return this.data;
	}
}
