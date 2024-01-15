export default function getAge(birthdate: string) {
    const getBirthdate = new Date(birthdate)
    const getCurrentDate = new Date()

    let age = getCurrentDate.getFullYear() - getBirthdate.getFullYear()
    const m = getCurrentDate.getMonth() - getBirthdate.getMonth()

    if (m < 0 || (m === 0 && getCurrentDate.getDate() < getBirthdate.getDate())) {
        age--
    }
    return age
}

/** 
 * function getAge(birthDate) {
  // convert the string to a date object
  let dob = new Date(birthDate);
  // get the current date
  let today = new Date();
  // calculate the difference in years
  let age = today.getFullYear() - dob.getFullYear();
  // adjust the age if the birthday has not passed yet
  if (today.getMonth() < dob.getMonth() || (today.getMonth() == dob.getMonth() && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

// test the function
console.log(getAge("1988-11-06")); // 35

*/
