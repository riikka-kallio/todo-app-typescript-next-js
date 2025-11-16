import { connectDB } from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

interface Params {
    params: {
        id: string;
    };
}

// UPDATE (toggle completed)
export async function PATCH(req: Request, { params }: Params) {
    await connectDB();

    const todo = await Todo.findById(params.id);
    if (!todo) return NextResponse.json({ error: "Not found" }, { status:  404});

    todo.completed = !todo.completed;
    await todo.save();

    return NextResponse.json(todo);
}

// DELETE todo

export async function DELETE(req: Request, { params }: Params) {
    await connectDB();

    await Todo.findByIdAndDelete(params.id);

    return NextResponse.json({ success: true});
}



