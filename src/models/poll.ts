import { Question } from '../models/question';
export interface Poll{
    questions: Array<Question>;
    name: string;
    id: number;
}