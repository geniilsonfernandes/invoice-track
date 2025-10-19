"use client";

import { useState } from "react";
import { createClient } from "../utils/supabase/client";
import { GoogleIcon } from "./icons";
import Loader from "./loader";
import { Button } from "./ui/button";



export default function AccountButton() {
  const [loading, setLoading] = useState(false);


const onClick = async () => {
  setLoading(true);
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (error) {
    console.error(error.message);
    // opcional: mostrar mensagem de erro no botão ou página
    setLoading(false);
  }
};
 
  return (
    <Button onClick={onClick}>
      {loading ? (
        <Loader className="mr-2 text-white dark:text-black" />
      ) : (
        <GoogleIcon />
      )}
      Continue with Google
    </Button>
  );
}
