import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const data = await request.json();
  const { word, description, set } = data;
  await sql`insert into language_card (word, description, set_name) values (${word}, ${description}, ${set})`;
  return Response.json({ status: "success" });
}
