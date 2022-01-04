import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  quotes:Quote[] = [];
  
  public username!:string;
  public quot!: string;
  public authors!: string;
  public votes:number = 0;
  submmitng = false;

onSubmit(){
  this.submmitng = true;
}

  addQuote(){
      this.quotes.push(new Quote(this.username, this.quot, this.authors, new Date(), this.votes));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
