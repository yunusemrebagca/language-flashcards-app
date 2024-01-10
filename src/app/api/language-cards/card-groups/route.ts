import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const data =
    await sql`select id, card_set from language_card_set order by id`;
  return Response.json(data.rows);
}
export const dynamic = "force-dynamic";
