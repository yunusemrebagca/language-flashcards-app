import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const data =
    await sql`select id, word, description, liked, saved from language_card order by id`;
  return Response.json(data.rows);
}

export const dynamic = "force-dynamic";
