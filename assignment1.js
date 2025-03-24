// Filename: CS2A_RVillanueva_C1-A1.js

// Student 1: Stephanie Faith Doctolero Javinar
const firstName1 = "Stephanie Faith";
const middleName1 = "Doctolero";
const lastName1 = "Javinar";
const birthdate1 = "October 28,2005";
const birthplace1 = "Dili, Santa Cruz, Ilocos Sur, Philippines, 2713";
const address1 = "Tablac, Candon City, Ilocos Sur, Philippines, 2710";
const course1 = " BSCS 1";
const dreamJob1 = "Software Developer";

// Classmate 1: Neil O'Brein Etrata Ocampo
const firstName2 = "Neil O'Brein";
const middleName2 = "Etrata";
const lastName2 = "Ocampo";
const birthdate2 = "September 17, 2003";
const birthplace2 = "Parioc 1st, Candon City, Ilocos Sur, Philippines, 2710";
const address2 = "Oaig-Daya, Galimuyod, Ilocos Sur, Philippines, 2709";
const course2 = "BSCS 1";
const dreamJob2 = "Web Developer";

// Classmate 2: Janeen Tawagen Inigo
const firstName3 = "Janeen";
const middleName3 = "Tawagen";
const lastName3 = "Inigo";
const birthdate3 = "September 16, 2006";
const birthplace3 = "Labut, Lidlidda, Ilocos Sur, Philippines, 2723";
const address3 = "Labut, Lidlidda, Ilocos Sur, Philippines, 2723";
const course3 = "BSCS 1";
const dreamJob3 = " Web Developer";

// Function to format student info
function formatStudentInfo(first, middle, last, bdate, bplace, addr, crs, job) {
    return `[${first.toUpperCase()} ${middle.toUpperCase()} ${last.toUpperCase()}] was born [${bdate}] at [${bplace.toUpperCase()}], and currently living at [${addr.toUpperCase()}]. [${first.toLowerCase()} ${middle.toLowerCase()} ${last.toLowerCase()}] is taking up [${crs.toLowerCase()}] and dreams to be [${job}] after graduation.\n`;
}

// Print student details
console.log(formatStudentInfo(firstName1, middleName1, lastName1, birthdate1, birthplace1, address1, course1, dreamJob1));
console.log(formatStudentInfo(firstName2, middleName2, lastName2, birthdate2, birthplace2, address2, course2, dreamJob2));
console.log(formatStudentInfo(firstName3, middleName3, lastName3, birthdate3, birthplace3, address3, course3, dreamJob3));
