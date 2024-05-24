type GermanGrades = 1 | 2 | 3 | 4 | 5 | 6 | undefined;
type AmericanGrades = "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: GermanGrades[] | AmericanGrades[];
}

type ClassRoom = Student[];


const newStudent1: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2],
}

const newStudent2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, "F", 3, 1, "B", 2, 5],
}

const newStudent3: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5],
}

const allStudents: ClassRoom = [newStudent1, newStudent2, newStudent3];

function printStudent(s: Student): void {
    const grades = s.grades.map((grade) => grade === undefined ? '*' : grade);
    console.log(`${s.firstName} ${s.lastName} (${s.age})`)
    console.log("=".repeat(30))
    console.log(`Grades: ${grades}`)
    console.log()
}

function printClassRoom(c: ClassRoom): void {
    c.forEach((s) => {printStudent(s)})
}

printClassRoom(allStudents);
