import { Component, OnInit, OnDestroy } from '@angular/core';
import { of,Observable,Subscription } from 'rxjs';
import { QuestionModel } from 'src/app/models/QuestionModel';
import { ChoiceModel } from 'src/app/models/ChoiceModel';
import { PollService } from 'src/app/services/poll-service.service';
import { PollModel } from 'src/app/models/PollModel';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit,OnDestroy {
  Question:QuestionModel;
  ListOfChoices:ChoiceModel[];
  poll:PollModel;
  pollSub:Subscription;

  constructor(private pollService:PollService) { }

  ngOnInit(): void {
    this.getPoll();
  }
  getPoll():void{
    console.log("Inside");
    this.pollSub = this.pollService.getPoll().subscribe(poll => {
      console.log("Inside fun");      
      //console.log(this.poll.length)
      this.Question=poll.Question;
      this.ListOfChoices=poll.ListOfChoices;
      console.log(this.Question.Question);
      console.log(poll);
    })
  }
  vote(choice:ChoiceModel):void{
    this.pollService.setPoll(choice);
    // this.pollService.Poll.ListOfChoices.forEach((value,key)=>{
    //   if(value.ChoiceId===choice.ChoiceId)
    //   value.Votes++;
    //   console.log("vote"+value.Votes);
    // })

  }
  ngOnDestroy()
   {
     this.pollSub.unsubscribe();
   }

}
