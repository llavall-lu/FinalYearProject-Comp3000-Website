import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing Required Fields" },
        { status: 400, statusText: "Missing Required Fields" }
      );
    }

    const existingBlog = await prisma.blogs.findUnique({
      where: {
        id,
      },
    });

    if (!existingBlog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404, statusText: "Not Found" }
      );
    }

    if (existingBlog.userId !== userId) {
      return NextResponse.json(
        { error: "Unauthorized to edit this blog" },
        { status: 403, statusText: "Forbidden" }
      );
    }

    const updatedBlog = await prisma.blogs.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.log("Error Updating Blog: ", error);
    return NextResponse.json(
      { error: "Error Updating Blog" },
      { status: 500, statusText: "Server Error" }
    );
  }
}
