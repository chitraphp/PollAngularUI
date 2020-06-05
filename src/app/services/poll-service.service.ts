import { Injectable } from '@angular/core';
import { of,Observable,from } from 'rxjs';

import { PollModel } from '../models/PollModel';
import { ChoiceModel } from '../models/ChoiceModel';
//import 'rxjs/add/Observable/of';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  Poll:PollModel;
  constructor( ){ 
    
    this.Poll=
      {
                        
        Question:{
          PollId:1,
        Question:'What flower you like?',
        Status:'active',
        Voted:0},
        ListOfChoices:[
          {
            ChoiceId:1,
          Choice:'Rose',
          Votes:0,
          PollId:1
        },
          {
            ChoiceId:2,
            Choice:'Lotus',
            Votes:0 ,
            PollId:1         
        }
      ]                    
      }
    
  }

  getPoll():Observable<PollModel>{
    
    //console.log(this.Poll);
    //console.log(this.Poll.length);
    return of(this.Poll);  
  }

  setPoll(choice:ChoiceModel):void{
    this.Poll.ListOfChoices.forEach((value,key)=>{
      if(value.ChoiceId===choice.ChoiceId)
      value.Votes++;
      console.log("vote"+value.Votes);
    });   
    this.Poll.Question.Voted++;
    console.log(this.Poll);
    }
    // https://localhost:44393/poll/13    

}
