"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function login() {
    await supabase.auth.signInWithOtp({
      email
    });
    setSent(true);
  }

  return (
    <div className="center">
      <h1>Connexion Fisherforce</h1>

      {!sent ? (
        <>
          <input
            type="email"
            placeholder="Ton email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={login}>Recevoir le lien</button>
        </>
      ) : (
        <p>📩 Un lien de connexion t’a été envoyé par email</p>
      )}
    </div>
  );
}

