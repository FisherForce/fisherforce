"use client";

import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";

export default function FollowButton({ targetUserId }) {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    checkFollow();
  }, []);

  async function checkFollow() {
    const { data } = await supabase
      .from("follows")
      .select("*")
      .eq("following_id", targetUserId)
      .single();

    if (data) setFollowing(true);
  }

  async function toggleFollow() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (following) {
      await supabase
        .from("follows")
        .delete()
        .eq("follower_id", user.id)
        .eq("following_id", targetUserId);
      setFollowing(false);
    } else {
      await supabase.from("follows").insert({
        follower_id: user.id,
        following_id: targetUserId
      });
      setFollowing(true);
    }
  }

  return (
    <button onClick={toggleFollow}>
      {following ? "Abonné" : "Suivre"}
    </button>
  );
}
