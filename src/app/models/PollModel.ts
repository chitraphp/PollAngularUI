import { QuestionModel } from './QuestionModel';
import { ChoiceModel } from './ChoiceModel';

export class PollModel {
    Question:QuestionModel;
    ListOfChoices:ChoiceModel[];
}