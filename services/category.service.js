const faker = require('faker');
class CategoriesService{

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        category: faker.commerce.department()
      });
    }
  }

  create(){

  }

  find(){
    return this.categories;
  }

  findeOne(id){
    return this.categories.find(item => item.id === id)
  }

  findBy(){

  }

  update(){

  }

  delete(){

  }
}

module.exports = CategoriesService;
