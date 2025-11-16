import { connectDB } from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

// GET all todos
export async function GET() {
    await connectDB();
    const todos = await Todo.find().sort({ createdAt: -1 });
    return Response.json(todos);
}

// CREATE a new todo
export async function POST(req: Request) {
    await connectDB();
    const { text } = await req.json();

const newTodo = await Todo.create({ text });
return NextResponse.json(newTodo, { status: 201 });
}