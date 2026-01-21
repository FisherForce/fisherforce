"use client";

import { supabase } from "../lib/supabase";

export default function LikeButton({ videoId }) {
  async function like() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    await supabase.from("likes").insert({
      user_id: user.id,
      video_id: videoId
    });
  }

  return <button onClick={like}>❤️</button>;
}
