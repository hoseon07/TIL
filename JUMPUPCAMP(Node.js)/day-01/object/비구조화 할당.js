function person() {
  return {
    firstName: "kim",
    lastName: "hoseon",
    age: 17,
    country: "Korea",
  };
}

let { firstName, lastName } = person();
console.log(firstName);
console.log(lastName);