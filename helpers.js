//Checks that each number in the input is a valid number before trying to find the mean, median, or mode
function checkIfNums(str) {
	let validated = [];
	let arr = str.split(',');

	for (let i = 0; i < arr.length; i++) {
		let val = Number(arr[i]);
		if (Number.isNaN(val)) {
			return new Error(`The value '${arr[i]}' is not a valid number`);
		}
		validated.push(val);
	}
	return validated;
}

// get a count for each number in the array
//save each num in array as the Key, and their count as Val
function getNumCount(arr) {
	let counts = {};
	arr.forEach((num) => {
		if (counts[num] === undefined) {
			counts[num] = 0;
		}
		counts[num] += 1;
	});
	return counts;
}

//get the most frequently occurring number from a count obj
function getMostFrequent(obj) {
	let topCount = 0;
	let mostFrequent = 0;
	for (const [ key, value ] of Object.entries(obj)) {
		if (value > topCount) {
			topCount = value;
			mostFrequent = key;
		}
	}
	return +mostFrequent;
}

//MODE - most frequently occurring number
function getMode(nums) {
	let counts = getNumCount(nums);
	let mode = getMostFrequent(counts);
	return mode;
}

//MEAN - the average of all numbers
function getMean(nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		total += nums[i];
	}
	return total / nums.length;
}

//MEDIAN - get the midpoint number
function getMedian(nums) {
	nums.sort((a, b) => a - b);

	let middleIdx = Math.floor(nums.length / 2);
	let median = 0;

	//if nums.length is an even number, and therefore doesn't have a proper 'middle' index, then the median is the average of the TWO middle indices
	if (nums.length % 2 === 0) {
		median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
	} else {
		median = nums[middleIdx];
	}
	return median;
}

module.exports = {
	checkIfNums,
	getMode,
	getMedian,
	getMean
};
