import { NextResponse } from 'next/server';

type Data = {
    name: string,
    age?: number
}
export async function GET() : Promise<NextResponse<Data>> {
    return NextResponse.json({ name: 'Hello World', age: 20 });
}