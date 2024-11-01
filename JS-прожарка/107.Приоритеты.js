const priorities = {
  guest: 1,
  user: 2,
  admin: 180,
  moderator: 10,
  vip: 50
}

const roles = ['user', 'vip', 'guest'];

const find = (priorities, roles) => {

  return roles.reduce((highestRole, currentRole) => {
    if (priorities[currentRole] > priorities[highestRole]) {
      return currentRole;
    }
    return highestRole;
  })
}

console.log(find(priorities, roles));
