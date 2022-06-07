const { getMode, getMedian, getMean } = require('./helpers');
let nums = [ 1, 2, 2, 3, 4 ];

describe('test mode, median, and mean', () => {
	test('test getMode', () => {
		let mode = getMode(nums);
		expect(mode).toBe(2);
	});
	test('test getMedian', () => {
		let median = getMedian(nums);
		expect(median).toBe(2);
	});
	test('test getMean', () => {
		let mean = getMean(nums);
		expect(mean).toBe(2.4);
	});
});
