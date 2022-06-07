const express = require('express');
const app = express();
const expressError = require('./expressError');

const { checkIfNums, getMode, getMedian, getMean } = require('./helpers');

// route handlers go here

app.get('/mean', (req, res, next) => {
	try {
		if (!req.query.nums) {
			throw new expressError('You must enter valid numbers', 400);
		}
		let nums = checkIfNums(req.query.nums);
		if (nums instanceof Error) {
			throw new expressError(nums.message);
		}
		let result = {
			operation: 'mean',
			value: getMean(nums)
		};

		return res.send(result);
	} catch (e) {
		next(e);
	}
});

app.get('/median', (req, res, next) => {
	try {
		if (!req.query.nums) {
			throw new expressError('You must enter valid numbers', 400);
		}
		let nums = checkIfNums(req.query.nums);
		if (nums instanceof Error) {
			throw new expressError(nums.message);
		}
		let result = {
			operation: 'median',
			value: getMedian(nums)
		};

		return res.send(result);
	} catch (e) {
		next(e);
	}
});

app.get('/mode', (req, res, next) => {
	try {
		if (!req.query.nums) {
			throw new expressError('You must enter valid numbers', 400);
		}
		let nums = checkIfNums(req.query.nums);
		if (nums instanceof Error) {
			throw new expressError(nums.message);
		}
		let result = {
			operation: 'mode',
			value: getMode(nums)
		};
		return res.send(result);
	} catch (e) {
		next(e);
	}
});

app.use((err, req, res, next) => {
	//default error status is 500
	let status = err.status || 500;
	let msg = err.message;

	//set the status and alert the user
	return res.status(status).json({
		error: { msg, status }
	});
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
