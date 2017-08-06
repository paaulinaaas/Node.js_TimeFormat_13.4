function secondsConverter(seconds) {
	var numberOfHours = Math.floor(seconds / 3600);
	var numberOfMinutes = Math.floor((seconds % 3600)/ 60)
	var numberOfSeconds = Math.floor(((seconds % 3600)% 60) % 60)

	return (numberOfHours + ' hours ' + numberOfMinutes + ' minutes ' + numberOfSeconds + ' seconds');
}

exports.secondsConverter = secondsConverter;