export class Recipe{
    public name:string;
    public description:string;
    public imageUrl:string;
    public country:string;

    constructor(name:string,desc:string,url:string,country:string)
    {
        this.name=name;
        this.description=desc;
        this.imageUrl=url;
        this.country=country;
    }
}