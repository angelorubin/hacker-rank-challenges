/* Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

const grades = [4, 73, 67, 38, 33]

function gradingStudents(grades) {

	for (let i = 0; i < grades.length; i++) {
		let currentGrade = grades[i]

		if (currentGrade < 38) {
        continue;
		}

		let modifiedNote = currentGrade

		while (modifiedNote % 5 != 0) {
        modifiedNote++;
		}

		let difference = modifiedNote - currentGrade;

    if (difference < 3) {
        grades[i] = modifiedNote;
    }
	}

	return grades
}

console.log(gradingStudents(grades))
