import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const data = await sql`select id from language_card order by id`;
  return Response.json(data.rows);
}
