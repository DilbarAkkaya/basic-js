module.exports = function createDreamTeam(members) {
  //members = ['Ivan', 'Marya', null, 242, 'Greg Mac']
  if (Array.isArray(members)){
  let nameOfCommand = ''; //'GIM'
  let elementMembersSplit;
  let firstChatArray = [];
  for (let i = 0; i < members.length; i++) {
    if(typeof members[i] === 'string') {
      elementMembersSplit = members[i].trim().split('');// [I v a n, M a r y a, G r e g M a c]
      firstChatArray.push(elementMembersSplit[0].toUpperCase());// [I, M, G]
    }  
  }
    return nameOfCommand = firstChatArray.sort().join('') //[GIM]
} else {
  return false;
}
}