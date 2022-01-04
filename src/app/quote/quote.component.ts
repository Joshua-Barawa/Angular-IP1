import { Component, Input, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quotes!:Quote[];

  constructor() {}


  handleUpVote(index:number){
    this.quotes[index].votes = this.quotes[index].votes + 1;

  }

  handleDownVote(index:number){
    if(this.quotes[index].votes > 0){
      this.quotes[index].votes = this.quotes[index].votes - 1;

    }
    else{
      this.quotes[index].votes = 0;
    }
  }

  deleteQuote(index:number){
   this.quotes.splice(index, 1);
  }

  ngOnInit(): void {
    
  }

}
