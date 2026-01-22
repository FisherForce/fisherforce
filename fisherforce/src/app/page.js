"use client";

import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";

// Version temporaire : pas de Supabase, vidéos fictives
export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadFeed();
  }, []);

  async function loadFeed() {
    // Vidéos factices pour tester l'affichage
    const fakeVideos = [
      {
        id: "1",
        title: "Pêche à la carpe - matinée réussie",
        video_url: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
        score: 100,
      },
      {
        id: "2",
        title: "Carnassier surprise",
        video_url: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
        score: 90,
      },
      {
        id: "3",
        title: "Techniques de pêche au leurre",
        video_url: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4",
        score: 80,
      },
    ];

    // Simuler un petit délai comme si c'était Supabase
    setTimeout(() => setVideos(fakeVideos), 500);
  }

  return (
    <main className="feed" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      {videos.length === 0 ? (
        <p style={{ color: "white" }}>Chargement du feed...</p>
      ) : (
        videos.map(video => <VideoCard key={video.id} video={video} />)
      )}
    </main>
  );
}

