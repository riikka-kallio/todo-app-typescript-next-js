import mongoose, { Schema, Document, models } from "mongoose";

export interface ITodo extends Document {
    test: string;
    completed: boolean;
}

const TodoSchema: Schema = new Schema(
{
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
},
{ timestamps: true }
);

export default models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);