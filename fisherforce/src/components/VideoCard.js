import VideoPlayer from "./VideoPlayer";
import LikeButton from "./LikeButton";

export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <VideoPlayer url={video.video_url} />
      <LikeButton videoId={video.id} />
    </div>
  );
}
