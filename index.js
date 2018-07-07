module.exports = function AOT(dispatch) {
	let styleBody = [201669, 201693, 201717, 201741, 201765, 201789, 201813, 201837, 201861, 201885, 201909];
	let races = {};
	dispatch.hook('S_SPAWN_USER', 13, event => {
		let race = Math.floor((event.templateId - 10101) / 100);
		races[event.gameId.toNumber()] = race;
		event.styleBack = 201921;
		event.styleBody = styleBody[race];
		return true;
	});

	dispatch.hook('S_USER_EXTERNAL_CHANGE', 6, event => {
		let race = races[event.gameId.toNumber()];
		if (race) {
			event.styleBack = 201921;
			event.styleBody = styleBody[race];
			return true;
		}
	});
};
