const faker = require('faker');

class UsersService{
  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 30;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      });
    }
  }

  create(){

  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.find(item => item.id === id);
  }

  findBy(){

  }

  update(){

  }

  delete(){

  }
}

module.exports = UsersService;
