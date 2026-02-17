export class User {
  name: string = '';
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 18;
  }
}