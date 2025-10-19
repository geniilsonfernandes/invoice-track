"use server";


import { User as AuthUser } from "@supabase/supabase-js";
import { createClient } from "../../utils/supabase/server";


export const getAuthUser = async () => {
  const supabase = await createClient();
  try {
    const { data } = await supabase.auth.getUser();
    const { user } = data;
    return user as AuthUser | undefined;
  } catch {
    return undefined;
  }
};

export const getUser = async () => {
  const supabase = await createClient();
  const user = await getAuthUser();

  console.log(user, "getUser");
  
  if (!user) {
    return null;
  }
  try {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("id", user?.id)
      .single();
    return data;
  } catch {
    return null;
  }
};

