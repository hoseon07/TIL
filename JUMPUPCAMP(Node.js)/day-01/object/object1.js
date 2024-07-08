let myObj = {}
console.log(typeof myObj);

let person = {
  name: "hoseon",
  gender: "man",
  getName: function() {
    console.log(this.name);
  }
}

console.log(person);

person.name = "seonho";
console.log(person);

person.gender = "woman";
console.log(person.gender);

// for in은 객체를 순회할 때 자주 사용된다.
for(value in person) {
  console.log(value);
}


