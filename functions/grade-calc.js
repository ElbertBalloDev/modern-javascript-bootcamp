const gradeCalc = (studentScore, totalScore) => {
	let letter;
	const score = (studentScore / totalScore) * 100;
	if (score >= 90) letter = "A";
	else if (score >= 80) letter = "B";
	else if (score >= 70) letter = "C";
	else if (score >= 60) letter = "D";
	else letter = "F";
	return `You got a ${letter} (${score}%)`;
};

const result = gradeCalc(20, 20);
console.log(result);
