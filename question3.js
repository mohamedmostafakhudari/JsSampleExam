// printAnswer(1, () => {
// 	const test = {
// 		key1: 5,
// 		key2: "abc",
// 		key3: 12,
// 		key4: "",
// 		key5: "1",
// 	};
// 	printTestCase(test);
// 	printTestBody(17, sumObjectValues(test));

// 	function sumObjectValues(obj) {
// 		let sum = 0;
// 		for (const key in obj) {
// 			if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
// 				sum += obj[key];
// 			}
// 		}
// 		return sum;
// 	}
// });

// asyncPrintAnswer(2, async () => {
// 	printTestCase("3 async iterations");
// 	await asyncPrintTestBody("\n0\n1\n2", async);

// 	async function async() {
// 		for (let i = 0; i < 3; i++) {
// 			setTimeout(() => console.log(i), i * 1000);
// 		}
// 	}
// });

// printAnswer(3, () => {
// 	const test = [13, 8, 41, 42, 49];
// 	printTestCase(test);
// 	printTestBody([49, 4], max(test));

// 	function max(arr) {
// 		return arr.reduce(
// 			(max, curr, i) => {
// 				const [maxValue, maxIndex] = max;
// 				if (curr > maxValue) {
// 					return [curr, i];
// 				} else {
// 					return max;
// 				}
// 			},
// 			[arr[0], 0]
// 		);
// 	}
// });

// printAnswer(4, () => {
// 	const now = new Date();
// 	const test = {
// 		dateStart: new Date(now.getTime() - 1 * 7 * 24 * 60 * 60 * 1000),
// 		dateEnd: now,
// 	};
// 	printTestCase(test);
// 	printTestBody(7, dateDiffInDays(test));

// 	function dateDiffInDays({ dateStart, dateEnd }) {
// 		return (dateEnd - dateStart) / (1000 * 60 * 60 * 24);
// 	}
// });

// printAnswer(5, () => {
// 	class Calculator {
// 		constructor() {}
// 		static add(x, y) {
// 			return x + y;
// 		}
// 		static subtract(x, y) {
// 			return x - y;
// 		}
// 		static div(x, y) {
// 			if (y === 0) {
// 				console.log("Math Error!");
// 				return;
// 			}
// 			return x / y;
// 		}
// 		static mul(x, y) {
// 			return x * y;
// 		}
// 	}
// 	const tests = [
// 		{
// 			x: 10,
// 			y: 10,
// 			op: Calculator.add,
// 			label: "10 + 10",
// 			expected: 20,
// 		},
// 		{
// 			x: 20,
// 			y: 10,
// 			op: Calculator.subtract,
// 			label: "20 - 10",
// 			expected: 10,
// 		},
// 		{
// 			x: 20,
// 			y: 10,
// 			op: Calculator.div,
// 			label: "20 / 10",
// 			expected: 2,
// 		},
// 		{
// 			x: 4,
// 			y: 2,
// 			op: Calculator.mul,
// 			label: "4 * 2",
// 			expected: 8,
// 		},
// 	];
// 	tests.forEach((test) => {
// 		printTestCase(test.label);
// 		printTestBody(test.expected, test.op(test.x, test.y));
// 	});
// });

// printAnswer(6, () => {
// 	printTestCase("args: 1,2,3,4,5");
// 	printTestBody([1, 2, "abc", true, null], groupValues(1, 2, "abc", true, null));

// 	function groupValues(...args) {
// 		return args;
// 	}
// });

// printAnswer(7, () => {
// 	const test = [1, 2, 3, 4, 5];
// 	printTestCase(test);
// 	printTestBody([5, 4, 3, 2, 1], reverse(test));

// 	function reverse(arr) {
// 		return arr.toReversed();
// 	}
// });

// printAnswer(8, () => {
// 	const test = {
// 		a: 1,
// 		b: 2,
// 	};
// 	printTestCase(test);
// 	printTestBody(
// 		[
// 			["a", 1],
// 			["b", 2],
// 		],
// 		objToArr(test)
// 	);

// 	function objToArr(obj) {
// 		return Object.entries(obj);
// 	}
// });

function printAnswer(qNum, cb) {
	console.log("\n");
	console.log("#".repeat(50));
	console.log(`Question ${qNum}`);
	cb();
	console.log("#".repeat(50));
}
async function asyncPrintAnswer(qNum, cb) {
	console.log("\n");
	console.log("#".repeat(50));
	console.log(`Question ${qNum}`);
	await cb();
	setTimeout(() => {
		console.log("#".repeat(50));
	}, 3 * 1000);
}
function printTestCase(test) {
	console.log("test example: ");
	console.log(test);
}
function printTestBody(expected, actual) {
	console.log("-".repeat(20));
	console.log(`expected: `);
	console.log(expected);
	console.log(`actual: `);
	console.log(actual);
	console.log("-".repeat(20));
}
async function asyncPrintTestBody(expected, actual_cb) {
	console.log("-".repeat(20));
	console.log(`expected: ${expected}`);
	console.log(`actual: `);
	await actual_cb();
	setTimeout(() => {
		console.log("-".repeat(20));
	}, 3 * 1000);
}
