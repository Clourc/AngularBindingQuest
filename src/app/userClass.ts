export class User {
    name: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
    ageIsHidden: boolean;

    constructor(name: string, firstName: string, age: number, quote: string, photo: string, ageIsHidden: boolean){
      this.name = name;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.photo = photo;
      this.ageIsHidden = ageIsHidden;
    }

    hideAge(): void {
      if(this.ageIsHidden){
        this.ageIsHidden = false;
      } else {
        this.ageIsHidden = true;
      }
    }
  };