import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  const data =
    await sql`select id, card_set, card_set_name from language_card_set order by id`;
  return Response.json(data.rows);
}
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const data = await request.json();
  const { card_set, card_set_name } = data;
  await sql`insert into language_card_set (card_set, card_set_name) values (${card_set}, ${card_set_name})`;
  return Response.json({ status: "success" });
}
