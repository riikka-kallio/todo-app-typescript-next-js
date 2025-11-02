import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
    test: string;
    completed: boolean;
}

const TodoSchema: Schema = new Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, defaulty: false },
});

export default mongoose.models.Todo ||
    mongoose.model<ITodo>("Todo", TodoSchema);