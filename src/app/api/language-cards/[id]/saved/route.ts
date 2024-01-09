import { sql } from "@vercel/postgres";

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const saved = await request.json().then((data) => data.saved);

  await sql`update language_card set saved = ${saved} where id = ${params.id}`;

  return Response.json({
    status: "success",
    message: `Saved status updated to ${saved}`,
  });
}

export const dynamic = "force-dynamic";
