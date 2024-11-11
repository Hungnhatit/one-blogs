import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get all commentf from a post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get('postSlug');

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      include: { user: true }
    });
    return new NextResponse(
      JSON.stringify(comments, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify(
        { message: 'Something went wrong. Please try again!' },
        { status: 500 }
      )
    );
  }
}

// Create a comment

export const POST = async () => {
  const session = getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify(
        { message: 'Not Authenticated. Please login to continue!' },
        { status: 401 }
      )
    );
  }

  try {
    const body = await prisma.comment.create({
      data: {
        ...body, userEmail: session.user.email
      },
    });

    return new NextResponse(
      JSON.stringify(comment, { status: 200 })
    );

  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify('Something went wrong. Please try again!', { status: 500 })
    );
  }
}