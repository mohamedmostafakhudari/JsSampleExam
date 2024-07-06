// printAnswer(1, () => {
// 	const tests = [
// 		{
// 			input: "4am",
// 			expected: 4,
// 		},
// 		{
// 			input: "4pm",
// 			expected: 16,
// 		},
// 	];

// 	tests.forEach((test) => {
// 		printTestCase(test.input);
// 		printTestBody(test.expected, convertTo24TimeSystem(test.input));
// 	});
// 	function convertTo24TimeSystem(timeInHours) {
// 		const [hours, meridiem] = timeInHours.match(/(\d+)(am|pm)/).slice(1);
// 		if (meridiem === "pm") {
// 			return 12 + +hours;
// 		}
// 		return +hours;
// 	}
// });

// printAnswer(2, () => {
// 	const test = "add(2)(3)";
// 	printTestCase(test);

// 	const add = (x) => (y) => x + y;

// 	printTestBody(5, add(2)(3));
// });

// printAnswer(3, () => {
// 	const arr = [
// 		{
// 			name: "Akali",
// 		},
// 		{
// 			name: "Yasou",
// 		},
// 		{
// 			name: "Laura",
// 		},
// 		{
// 			name: "John",
// 		},
// 	];
// 	console.log(arr);
// 	const tests = [
// 		{
// 			name: "John",
// 			expected: true,
// 		},
// 		{
// 			name: "Ahmed",
// 			expected: false,
// 		},
// 	];
// 	tests.forEach((test) => {
// 		printTestCase(`Is ${test.name} exist?`);
// 		printTestBody(test.expected, isExist(test.name, arr));
// 	});
// 	function isExist(name, arr) {
// 		return arr.some((obj) => obj.name.toLowerCase() === name.toLowerCase());
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
