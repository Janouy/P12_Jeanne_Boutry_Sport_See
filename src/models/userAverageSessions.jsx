/**
 * @class representing user's daily average sessions's duration
 */

export class UserAverageSessions {
	/**
	 * @param {number} id - user's id
	 * @param {array} sessions - user's daily average sessions's duration
	 */
	constructor(userId, sessions) {
		this.userId = userId;
		this.sessions = sessions;
	}

	/**
	 * Get sessions values.
	 * @return {{day: string, sessionLength: number}[]} user's daily sessions values
	 */
	getFormatedAverageSessions() {
		const sessionsAddDays = [];
		const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
		for (let i = 0; i < this.sessions.length; i++) {
			sessionsAddDays.push({
				day: weekDays[i],
				sessionLength: this.sessions[i].sessionLength,
			});
		}
		return sessionsAddDays;
	}
}
