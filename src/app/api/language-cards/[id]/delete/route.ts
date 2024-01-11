import { sql } from "@vercel/postgres";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  await sql`delete from language_card where id = ${params.id}`;
  return Response.json({
    status: "success",
  });
}

export const dynamic = "force-dynamic";
