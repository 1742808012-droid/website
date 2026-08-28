const photoPalette = [
  ["#0d1117", "#375a7f", "#d7b98e"],
  ["#111111", "#4d4a42", "#b8c4b2"],
  ["#15110e", "#7b5135", "#d6a15f"],
  ["#101419", "#475766", "#e7e1d2"],
  ["#120f12", "#6e4254", "#c7b7c7"],
  ["#0c1514", "#2b665f", "#e2c27e"]
];

export const works = [
  {
    id: "blue-hour-street",
    type: "photo",
    category: "街拍",
    title: "Blue Hour Street",
    year: "2026",
    location: "City",
    featured: true,
    cover: `${import.meta.env.BASE_URL}images/hero/hero-city-blue-hour-1600.jpg`,
    images: [`${import.meta.env.BASE_URL}images/hero/hero-city-blue-hour-1600.jpg`],
    palette: photoPalette[0],
    description: "雨后蓝调时刻的街道，冷色天光和橱窗暖光在地面形成安静的反射。"
  },
  {
    id: "quiet-portrait",
    type: "photo",
    category: "人像",
    title: "Quiet Portrait",
    year: "2026",
    location: "Studio",
    featured: true,
    palette: photoPalette[1],
    description: "低饱和人像练习，关注面部情绪、肩颈线条和柔和光比。"
  },
  {
    id: "coast-memory",
    type: "photo",
    category: "风景",
    title: "Coast Memory",
    year: "2025",
    location: "Coast",
    featured: true,
    palette: photoPalette[2],
    description: "海岸线、风和远处的云，用克制的构图保留空间感。"
  },
  {
    id: "live-event",
    type: "photo",
    category: "活动",
    title: "Live Event",
    year: "2025",
    location: "Hangzhou",
    palette: photoPalette[3],
    description: "活动现场记录，重点捕捉舞台光线和人物之间的即时关系。"
  },
  {
    id: "brand-moment",
    type: "photo",
    category: "商业",
    title: "Brand Moment",
    year: "2025",
    location: "Shanghai",
    featured: true,
    palette: photoPalette[4],
    description: "为品牌内容准备的一组视觉素材，强调质感、细节和使用场景。"
  },
  {
    id: "daily-documentary",
    type: "photo",
    category: "纪实",
    title: "Daily Documentary",
    year: "2024",
    location: "Street",
    palette: photoPalette[5],
    description: "日常切片式记录，用小场景呈现城市生活的轻微波动。"
  },
  {
    id: "seven-sweet-fashion-tvc",
    type: "video",
    category: "商业",
    title: "7分甜双人时尚 TVC",
    year: "2026",
    location: "Streamable",
    featured: true,
    videoUrl: "https://streamable.com/e/7cmsp9",
    platform: "streamable",
    palette: ["#12100f", "#7a4d46", "#e3c18c"],
    description: "一支双人时尚方向的商业 TVC 视频作品，使用 Streamable 嵌入播放，页面加载更轻。"
  },
  {
    id: "seven-sweet-fashion-tvc-bilibili",
    type: "video",
    category: "B站对比",
    title: "7分甜双人时尚 TVC B站版",
    year: "2026",
    location: "Bilibili",
    videoUrl: "https://player.bilibili.com/player.html?bvid=BV1xU8v6HEr9&high_quality=1&danmaku=0",
    platform: "bilibili",
    palette: ["#141113", "#5b526d", "#d7b98e"],
    description: "同一支视频的 B 站嵌入版本，已尽量关闭默认弹幕，用于和 Streamable、本地文件加载方式对比。"
  },
  {
    id: "seven-sweet-fashion-tvc-local",
    type: "video",
    category: "本地对比",
    title: "7分甜双人时尚 TVC 本地版",
    year: "2026",
    location: "GitHub Pages",
    videoUrl: `${import.meta.env.BASE_URL}videos/7分甜双人时尚tvc.m4v`,
    videoType: "video/mp4",
    palette: ["#0d1117", "#4f5f72", "#d7b98e"],
    description: "同一支视频的 GitHub Pages 本地文件版本，用于和 B 站嵌入版对比加载速度。"
  },
  {
    id: "xinpianchang-a13184756",
    type: "video",
    category: "新片场",
    title: "新片场作品 A13184756",
    year: "2026",
    location: "Xinpianchang",
    videoUrl: "https://www.xinpianchang.com/a13184756?from=UserProfile",
    platform: "xinpianchang",
    palette: ["#121212", "#5b4a3f", "#c8b184"],
    description: "来自新片场的视频作品链接，点击后可在新片场页面观看完整内容。"
  },
  {
    id: "manmi-yogurt-qiniu",
    type: "video",
    category: "七牛云",
    title: "满米酸奶 TVC 预热",
    year: "2026",
    location: "Qiniu Kodo",
    videoUrl: "http://tkhl59nlj.hd-bkt.clouddn.com/%E6%BB%A1%E7%B1%B3%E9%85%B8%E5%A5%B6tvc%E9%A2%84%E7%83%AD.mp4",
    platform: "qiniu",
    palette: ["#15110d", "#6c5a3d", "#e0c47f"],
    description: "七牛云对象存储视频直链，当前按 iframe 方式嵌入展示。"
  },
  {
    id: "travel-cut",
    type: "video",
    category: "旅拍",
    title: "Travel Cut",
    year: "2026",
    location: "China",
    featured: true,
    videoUrl: "https://example.com/video",
    palette: ["#101010", "#3c5f73", "#d7b98e"],
    description: "一支适合作为旅行影像方向展示的短片项目，占位链接可替换为真实视频地址。"
  },
  {
    id: "event-recap",
    type: "video",
    category: "活动",
    title: "Event Recap",
    year: "2025",
    location: "Shanghai",
    videoUrl: "https://example.com/video",
    palette: ["#130f0d", "#59433a", "#e2be8a"],
    description: "活动回顾视频，展示现场节奏、人物互动和品牌氛围。"
  },
  {
    id: "brand-film",
    type: "video",
    category: "商业",
    title: "Brand Film",
    year: "2025",
    location: "Studio",
    featured: true,
    videoUrl: "https://example.com/video",
    palette: ["#0f1316", "#43535a", "#c8d0cd"],
    description: "商业短片项目模板，可用于展示产品、空间或人物品牌形象。"
  }
];

export const categoriesFor = (type) => [
  "全部",
  ...Array.from(new Set(works.filter((work) => work.type === type).map((work) => work.category)))
];
