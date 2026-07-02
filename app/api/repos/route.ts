import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/ZeroDawnDev/repos?sort=updated&per_page=4",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    console.log("GitHub Response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json([]);
  }
}