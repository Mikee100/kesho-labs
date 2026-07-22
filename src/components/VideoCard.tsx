import VideoPlayerModal from "./VideoPlayerModal";
import type { Video } from "@/data/projects";

export default function VideoCard({ video }: { video: Video }) {
  return <VideoPlayerModal video={video} />;
}
