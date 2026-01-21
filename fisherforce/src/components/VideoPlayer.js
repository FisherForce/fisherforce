export default function VideoPlayer({ url }) {
  return (
    <iframe
      src={url.replace("watch?v=", "embed/")}
      allow="autoplay"
      className="video"
    />
  );
}
