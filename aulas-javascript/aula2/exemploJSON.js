let user = {
  name: "Maurício Neto",
  age: 35,
  isActive: true,
};

console.log(typeof user);

let userJSON = JSON.stringify(user);
console.log(typeof userJSON);
console.log(userJSON);

let newUser = JSON.parse(userJSON);
console.log(typeof newUser);
console.log(newUser);

let schedule = `{
"meetups": [
 { "title": "Conference 1", "date": "2017-11-30T12:00:00.000Z" },
 { "title": "Conference 2", "date": "2017-04-18T12:00:00.000Z" }
]
}`;
schedule = JSON.parse(schedule, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});
console.log(`Date: ${schedule.meetups[1].date.getDate()}/${schedule.meetups[1].date.getMonth()+1}/${schedule.meetups[1].date.getFullYear()}`);
