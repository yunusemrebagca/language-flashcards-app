import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const data =
    await sql`select word, description, saved, liked from language_card where id = ${params.id}`;
  return Response.json(data.rows);
}
