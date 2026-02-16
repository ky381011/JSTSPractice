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

class AdminUser extends User {
  adminRole: number = 0;

  public sayAdminRole(): void {
    console.log(`My admin Role: ${this.adminRole}`);
  }
}

const emma = new AdminUser('Emma', 30); // emmaはAdminUser型になる
console.log(emma.name);
console.log(emma.isAdult());
emma.sayAdminRole();