export class Quote {
    
    postedBy!: string;
    quote!: string;
    author!: string;
    postedOn!: Date;

    constructor(postedBy: string, quote: string, author: string, postedOn: Date) {
        this.postedBy = postedBy;
        this.quote = quote;
        this.author = author;
        this.postedOn = postedOn;
    }

}
