function generateSemesterInputs() {
    const semesters = document.getElementById('semesters').value;
    const semesterInputs = document.getElementById('semesterInputs');
    semesterInputs.innerHTML = '';

    for (let i = 1; i <= semesters; i++) {
        semesterInputs.innerHTML += `
            <div>
                <label for="sgpa${i}">SGPA Sem ${i}:</label>
                <input type="number" id="sgpa${i}" name="sgpa${i}" step="0.01" min="0" max="10" required>
                <label for="credits${i}">Credits Sem ${i}:</label>
                <input type="number" id="credits${i}" name="credits${i}" min="1" required>
            </div>
        `;
    }
}

function calculateCGPA() {
    const semesters = document.getElementById('semesters').value;
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= semesters; i++) {
        const sgpa = parseFloat(document.getElementById(`sgpa${i}`).value);
        const credits = parseFloat(document.getElementById(`credits${i}`).value);

        totalPoints += sgpa * credits;
        totalCredits += credits;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `CGPA: ${cgpa.toFixed(2)}`;
}
