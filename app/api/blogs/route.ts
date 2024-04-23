import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const { title, content, date } = await req.json(); 

    if (!title || !content || !date || !userId) {
      return NextResponse.json(
        { error: "Missing Required Fields or User ID" },
        { status: 400, statusText: "Bad Request" }
      );
    }

    if (title.length > 64) {
      return NextResponse.json(
        { error: "Title Too Long" },
        { status: 400, statusText: "Bad Request" }
      );
    }

    const blog = await prisma.blogs.create({
      data: {
        title,
        content,
        date,
        userId,
      },
    });

    console.log("Created Blog: ", blog);

    return NextResponse.json(blog, { status: 201, statusText: "Created" }); 
  } catch (error) {
    console.log("Error Creating Blog: ", error);
    return NextResponse.json(
      { error: "Error Creating Blog" },
      { status: 500, statusText: "Server Error" }
    );
  }
}

export async function GET(req: Request) {
  try {
    const blogs = await prisma.blogs.findMany();

    return NextResponse.json(blogs); 
  } catch (error) {
    console.log("Error Getting Blogs: ", error);
    return NextResponse.json(
      { error: "Error Getting Blogs" },
      { status: 500, statusText: "Server Error" }
    );
  }
}


