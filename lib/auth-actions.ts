"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function signin() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:3000" },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }
}