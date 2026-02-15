export {};

class User {
  name: string = '';
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 18;
  }

  setAge(age: number) { // ここで受け取るageは、クラスの外部から渡される値
    this.age = age; // thisはクラスのインスタンスを指すため、ageプロパティに値を代入できる
  }
}

const olivia = new User();
olivia.name = 'Olivia';
olivia.setAge(30);
console.log(`${olivia.name} is an adult: ${olivia.isAdult()}`);

const liam = new User();
liam.name = 'Liam';
liam.setAge(15);
console.log(`${liam.name} is an adult: ${liam.isAdult()}`);