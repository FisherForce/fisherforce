"use client";

import { supabase } from "../../lib/supabase";

export default function Login() {
  async function login() {
    await supabase.auth.signInWithOAuth({
      provider: "google"
    });
  }

  return (
    <div className="center">
      <h1>Connexion Fisherforce</h1>
      <button onClick={login}>Se connecter avec Google</button>
    </div>
  );
}
