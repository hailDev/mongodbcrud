const { NextResponse } = require('next/server');

let res = NextResponse;

export async function GET(req) {
  return res.json(
    { message: 'This is testing' },
    { status: 200, statusText: 'OKAY' }
  );
}
