class Badge {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  
  get firstName() {
    return this._firstName;
  }
  
  set firstName(newFirstName) {
    this._firstName = newFirstName;
    this._updateFullName();
  }
  
  get lastName() {
    return this._lastName;
  }
  
  set lastName(newLastName) {
    this._lastName = newLastName;
    this._updateFullName();
  }
  
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  
  set fullName(newFullName) {
    const parts = newFullName.split(' ');
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
  
  _updateFullName() {
    this.fullName = `${this._firstName} ${this._lastName}`;
  }
}

const employeBadge = new Badge('Ivan', 'Ivanov');
employeBadge.firstName = 'Petr Petrov'

console.log(employeBadge.firstName);
console.log(employeBadge.lastName);
console.log(employeBadge.fullName);

////////

const createBadge = (firstName, lastName) => {
  let _firstName = firstName;
  let _lastName = lastName;
  
  const badge = {};
  
  Object.defineProperty(badge, 'firstName', {
    get: function() {
      return _firstName;
    },
    set: function(newFirstName) {
      _firstName = newFirstName;
      updateFullname();
    }
  });
  
    Object.defineProperty(badge, 'lastName', {
    get: function() {
      return _lastName;
    },
    set: function(newLastName) {
      _lastNameName = newLastName;
      updateFullname();
    }
  });
  
    Object.defineProperty(badge, 'fullName', {
    get: function() {
      return `${_firstName} ${_lastName}`;
    },
    set: function(newFullName) {
      const parts = newFullName.split(' ');
      _firstName = parts[0];
      _lastName = parts[1];
    }
  });
  
  function updateFullname() {
    badge.fullName = `${_firstName} ${_lastName}` 
  }
  
  return badge;
}

const employeeBadge = createBadge('Ivan', 'Ivanov');

employeeBadge.fullName = 'Petr Petrov';

console.log(employeeBadge.firstName);
console.log(employeeBadge.lastName);
console.log(employeeBadge.fullName);
