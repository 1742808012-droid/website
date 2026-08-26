import { ExternalLink, Play } from "lucide-react";

export default function VideoEmbed({ work }) {
  const isPlaceholder = work.videoUrl?.includes("example.com");

  return (
    <div className="video-embed" style={{ background: `linear-gradient(135deg, ${work.palette[0]}, ${work.palette[1]}, ${work.palette[2]})` }}>
      <div className="video-embed-content">
        <Play size={34} fill="currentColor" />
        <h2>{work.title}</h2>
        {isPlaceholder ? (
          <p>这里是视频播放位。将作品数据中的 videoUrl 替换为真实链接后即可跳转或嵌入播放。</p>
        ) : (
          <a href={work.videoUrl} target="_blank" rel="noreferrer">
            打开视频
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
