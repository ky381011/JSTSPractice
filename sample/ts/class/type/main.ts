export {};

class User {
  name: string = '';
  private age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isAdult(): boolean {
    return this.age >= 18;
  }
}

const olivia = new User('Olivia', 23); // oliviaはUser型になる
const liam = new User('Liam', 17); // liamもUser型になる