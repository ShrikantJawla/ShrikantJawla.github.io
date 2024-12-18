import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = (req: NextRequest) => {

  return NextResponse.json({
    result: "ok",
  });
};
