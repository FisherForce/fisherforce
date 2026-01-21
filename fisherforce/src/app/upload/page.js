"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Upload() {
  const [url, setUrl] = useState("");

  async function submit() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    await supabase.from("videos").insert({
      user_id: user.id,
      video_url: url,
      score: 0
    });

    alert("Vidéo publiée !");
  }

  return (
    <div className="center">
      <h1>Publier une vidéo</h1>
      <input
        placeholder="URL YouTube Short"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <button onClick={submit}>Publier</button>
    </div>
  );
}
