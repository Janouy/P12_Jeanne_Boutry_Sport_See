/**
 * @class representing one user's activity
 */

export class UserActivity {
	/**
	 * @param {number} id
	 * @param {object} daily sessions
	 */
	constructor(userId, sessions) {
		this.userId = userId;
		this.sessions = sessions;
	}

	/**
	 * Get sessions values.
	 * @return {array} sessions values
	 */
	getSessions() {
		//sort sessions by chronological order
		let sortedSessions = this.sessions.sort(function (a, b) {
			return new Date(a.day) - new Date(b.day);
		});
		//if thera are more than 10 days, we select only the last days to display only 10 days in the graph
		if (sortedSessions.length > 10) {
			//replacedDatesSessions.reverse();
			sortedSessions = sortedSessions.slice(sortedSessions.length - 10);
		}
		//replacing chronological date by nummbers 1 to 10
		sortedSessions.forEach((session, index) => (session["day"] = index + 1));

		return sortedSessions;
	}
}
