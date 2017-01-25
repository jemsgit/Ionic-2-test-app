import { Answer } from '../models/answer';
export interface PollResult{
    answers: Array<Answer>;
    name: string;
    id: number;
}