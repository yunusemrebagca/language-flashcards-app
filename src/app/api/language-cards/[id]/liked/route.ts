import { sql } from "@vercel/postgres";

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const liked = await request.json().then((data) => data.liked);

  await sql`update language_card set liked = ${liked} where id = ${params.id}`;

  return Response.json({
    status: "success",
    message: `Liked status updated to ${liked}`,
  });
}

export const dynamic = "force-dynamic";
