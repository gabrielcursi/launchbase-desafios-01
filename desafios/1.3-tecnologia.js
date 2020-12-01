const users = [
  { name: "Carlos", technologys: ["HTML", "CSS"] },
  { name: "Jasmine", technologys: ["JavaScript", "CSS", "ReactJS"] },
  { name: "Tuane", technologys: ["HTML", "Node.js", "React Native"] }
];

for (let user of users) {
  console.log(`${user.name} working with ${user.technologys.join(', ')}`)
}

function checkIfUsersUseCSS(user) {
  for (let technology of user.technologys) {
    if(technology == "CSS")return true
  }
  return false
}

for (let i = 0; i < users.length; i++) {
  const usersWorkingWithCSS = checkIfUsersUseCSS(users[i])
  if(usersWorkingWithCSS){
    console.log(`The user ${users[i].name} working with CSS`)
  }
}