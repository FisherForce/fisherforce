"use client";

import { supabase } from "../../../lib/supabase";
import { useEffect, useState } from "react";

export default function Profile({ params }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("username", params.username);

    setVideos(data || []);
  }

  return (
    <div>
      <h1>@{params.username}</h1>
      {videos.map(v => (
        <p key={v.id}>{v.video_url}</p>
      ))}
    </div>
  );
}
