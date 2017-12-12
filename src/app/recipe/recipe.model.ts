import { Ingredients } from "../shopping-list/ingredients.model";

export class Recipe{
    public name:string;
    public description:string;
    public imageUrl:string;
    public country:string;
    public ingredients:Ingredients[]=[];

    constructor(name:string,desc:string,url:string,country:string,ingredients:Ingredients[])
    {
        this.name=name;
        this.description=desc;
        this.imageUrl=url;
        this.country=country;
        this.ingredients=ingredients;
    }
}