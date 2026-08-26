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
