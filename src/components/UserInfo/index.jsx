import React from "react";
import Welcome from "./children/welcome";
import NutritionalsInfos from "./children/nutritionalsInfos";
import Score from "./children/score";

function UserInfo() {
	return (
		<div>
			UserInfo
			<Welcome />
			<NutritionalsInfos />
			<Score />
		</div>
	);
}

export default UserInfo;
