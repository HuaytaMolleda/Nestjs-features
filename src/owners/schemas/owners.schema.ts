import * as mongoose from 'mongoose';

export const OwnerSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: String,
  cats:[{type: mongoose.Schema.Types.ObjectId,
        ref:'Cat'}]
});