import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-app';

  quotes:Quote[] = [];
  newQuote!:Quote;

  public username!: string;
  public quote!: string;
  public author!: string;

  submitted = false;

  onSubmit() { this.submitted = true; }


  addQuote(){
    this.newQuote = new Quote(this.username, this.quote, this.author, new Date());
    this.quotes.push(new Quote(this.username, this.quote, this.author, new Date()));

  }

}
