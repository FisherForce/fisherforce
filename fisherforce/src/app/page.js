"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadFeed();
  }, []);

  async function loadFeed() {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .order("score", { ascending: false })
      .limit(20);

    setVideos(data || []);
  }

  return (
    <main className="feed">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </main>
  );
}
