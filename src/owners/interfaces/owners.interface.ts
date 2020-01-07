import { Document } from 'mongoose';

export interface Owner extends Document {
  name: string;
  lastname: string;
  age: number;
  cats: string[];
}