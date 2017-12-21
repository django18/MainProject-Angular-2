import { Ingredients } from "../shopping-list/ingredients.model";

export class Recipe{
    public id:number;
    public name:string;
    public description:string;
    public imageUrl:string;
    public country:string;
    public ingredients:Ingredients[]=[];

    constructor(id:number,name:string,desc:string,url:string,country:string,ingredients:Ingredients[])
    {
        this.id=id;
        this.name=name;
        this.description=desc;
        this.imageUrl=url;
        this.country=country;
        this.ingredients=ingredients;
    }
}