/**
 * @class representing one user's performances
 */

export class UserPerformances {
	/**
	 * @param {number} id - user's id
	 * @param {object} kind - type of performed activities
	 * @param {array} data - user's performances value per kind of activity
	 */
	constructor(userId, kind, data) {
		this.userId = userId;
		this.kind = kind;
		this.data = data;
	}

	/**
	 * Get data values.
	 * @return {{kind: string, value: number}[]} user's performances values with kind of activity
	 */
	getFormatedPerformancesDatas() {
		//order datas by kind
		this.data.sort((a, b) => a.kind - b.kind);
		//replace the number by the name of the corresponding kind of performance
		this.data.forEach((data, index) => (data["kind"] = this.kind[index + 1]));
		return this.data;
	}
}
