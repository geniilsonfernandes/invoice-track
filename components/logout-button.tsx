"use client";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { Button } from "./ui/button";

export default function LogoutButton() {
    const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  if (!user) return null; // não renderiza nada se não estiver logado



  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut(); // 🔑 remove a sessão (local + supabase)
    router.push("/account"); // manda pra página de login
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout
    </Button>
  );
}
