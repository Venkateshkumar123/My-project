export class Post{
  gamename:string;
  genere:string;
  description:string;
  requirements:string;
  img:string;
  price:string

  constructor (gamename:string, genere:string, description:string, requirements:string, img:string,price:string){

    this.gamename = gamename
    this.genere = genere
    this.description = description
    this.requirements  = requirements
    this.img=img
    this.price=price

  }


}
