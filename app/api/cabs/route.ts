import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CabRoute from '@/models/CabRoute';

export async function GET() {
  try {
    await dbConnect();
    const routes = await CabRoute.find({});
    return NextResponse.json({ success: true, data: routes });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const cabRoute = await CabRoute.create(body);
    return NextResponse.json({ success: true, data: cabRoute }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
