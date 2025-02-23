// Filename: CS2A_RVillanueva_C1-A1.js

// Student 1: Raymond Villanueva
const firstName1 = "Raymond";
const middleName1 = "Lopez";
const lastName1 = "Villanueva";
const birthdate1 = "January 1, 2001";
const birthplace1 = "Upper Bonifacio, Baguio City, Benguet, Philippines 2600";
const address1 = "San Nicolas, Candon City, Ilocos Sur, Philippines 2710";
const course1 = "Bachelor of Science in Computer Science";
const dreamJob1 = "Software Engineer";

// Classmate 1: Adrian Mendoza
const firstName2 = "Adrian";
const middleName2 = "Lopez";
const lastName2 = "Mendoza";
const birthdate2 = "March 5, 2002";
const birthplace2 = "Upper Bonifacio, Baguio City, Benguet, Philippines 2600";
const address2 = "San Nicolas, Candon City, Ilocos Sur, Philippines 2710";
const course2 = "Bachelor of Science in Information Technology";
const dreamJob2 = "Cybersecurity Analyst";

// Classmate 2: Bianca Torres
const firstName3 = "Bianca";
const middleName3 = "Santos";
const lastName3 = "Torres";
const birthdate3 = "July 18, 2004";
const birthplace3 = "Upper Bonifacio, Baguio City, Benguet, Philippines 2600";
const address3 = "San Nicolas, Candon City, Ilocos Sur, Philippines 2710";
const course3 = "Bachelor of Science in Computer Science";
const dreamJob3 = "Data Scientist";

// Function to format student info
function formatStudentInfo(first, middle, last, bdate, bplace, addr, crs, job) {
    return `[${first.toUpperCase()} ${middle.toUpperCase()} ${last.toUpperCase()}] was born [${bdate}] at [${bplace.toUpperCase()}], and currently living at [${addr.toUpperCase()}]. [${first.toLowerCase()} ${middle.toLowerCase()} ${last.toLowerCase()}] is taking up [${crs.toLowerCase()}] and dreams to be [${job}] after graduation.\n`;
}

// Print student details
console.log(formatStudentInfo(firstName1, middleName1, lastName1, birthdate1, birthplace1, address1, course1, dreamJob1));
console.log(formatStudentInfo(firstName2, middleName2, lastName2, birthdate2, birthplace2, address2, course2, dreamJob2));
console.log(formatStudentInfo(firstName3, middleName3, lastName3, birthdate3, birthplace3, address3, course3, dreamJob3));
