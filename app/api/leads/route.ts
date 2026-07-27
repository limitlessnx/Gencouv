import { NextResponse } from "next/server";
export async function GET(){
  return NextResponse.json({ok:true,source:"mock",leads:[{id:"lead_001",name:"Sample Lead",stage:"qualified"}]});
}
export async function POST(request:Request){
  const body=await request.json();
  return NextResponse.json({ok:true,message:"Lead accepted. Connect this route to Supabase in production.",lead:body},{status:201});
}
