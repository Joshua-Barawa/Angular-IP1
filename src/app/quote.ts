
export class Quote {
    public name!:string
    public quote!:string;
    public author!:string;
    public postedOn!:Date

    constructor(name:string ,quote:string, author:string, postedOn:Date) {
        this.name = name;
        this.quote = quote;
        this.author = author;
        this.postedOn = postedOn
    }

}
