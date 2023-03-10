/**
 * @class representing user's daily activity
 */

export class UserActivities {
	/**
	 * @param {number} id - user's id
	 * @param {array} sessions - user's sport daily activity
	 */
	constructor(userId, sessions) {
		this.userId = userId;
		this.sessions = sessions;
	}

	/**
	 * Get sessions values.
	 * @return {{day: number, kilogram: number, calories: number}[]} user's sport daily sessions values
	 */
	getFormatedActivitySessions() {
		//sorts sessions in chronological order
		let sortedSessions = this.sessions.sort(function (a, b) {
			return new Date(a.day) - new Date(b.day);
		});
		//if there are more than 10 days, we select only the last days to display only 10 days in the graph
		if (sortedSessions.length > 10) {
			//replacedDatesSessions.reverse();
			sortedSessions = sortedSessions.slice(sortedSessions.length - 10);
		}
		//replacing chronological dates by nummbers 1 to 10
		sortedSessions.forEach((session, index) => (session["day"] = index + 1));
		return sortedSessions;
	}
}
