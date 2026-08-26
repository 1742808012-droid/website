# 个人作品展示网站实现文档

## 一、实现目标

基于 GitHub 仓库 `https://github.com/1742808012-droid/website` 实现一个个人摄影与视频作品展示网站。首版目标是完成一个可上线、可维护、响应式适配良好的静态作品集网站，重点展示摄影作品、视频作品、个人介绍和联系方式。

## 二、推荐技术栈

首版建议使用以下技术：

- 构建工具：Vite
- 前端框架：React
- 路由：react-router-dom
- 图标：lucide-react
- 动效：framer-motion
- 图片预览：photoswipe 或自定义 lightbox
- 样式：普通 CSS 或 CSS Modules
- 部署：Vercel 优先，GitHub Pages 作为备选

推荐原因：

- 适合静态作品展示网站。
- 开发速度快，维护成本低。
- 页面和组件结构清晰。
- 后续可以扩展作品详情、分类筛选、多语言和后台管理。

## 三、项目初始化

如果本地还没有拉取 GitHub 仓库，先执行：

```bash
git clone https://github.com/1742808012-droid/website.git
cd website
```

如果当前目录已经准备好作为项目目录，可直接初始化 Vite：

```bash
npm create vite@latest . -- --template react
npm install
```

安装推荐依赖：

```bash
npm install react-router-dom lucide-react framer-motion photoswipe
```

启动本地开发服务：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览生产版本：

```bash
npm run preview
```

## 四、目录结构

建议采用以下目录结构：

```text
website/
  public/
    images/
      hero/
      photography/
      video-covers/
      profile/
    videos/
  src/
    components/
      Header.jsx
      Footer.jsx
      WorkGrid.jsx
      WorkCard.jsx
      Lightbox.jsx
      FilterBar.jsx
      VideoModal.jsx
    pages/
      Home.jsx
      Photography.jsx
      Video.jsx
      ProjectDetail.jsx
      About.jsx
      Contact.jsx
    data/
      works.js
      profile.js
    styles/
      global.css
      layout.css
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
  README.md
```

## 五、路由规划

首版页面路由如下：

| 路径 | 页面 | 用途 |
| --- | --- | --- |
| `/` | Home | 首页与精选作品 |
| `/photography` | Photography | 摄影作品列表 |
| `/video` | Video | 视频作品列表 |
| `/works/:id` | ProjectDetail | 作品详情 |
| `/about` | About | 关于个人 |
| `/contact` | Contact | 联系方式 |

`App.jsx` 中负责配置路由、全局布局和公共导航。

## 六、组件拆分

### 1. Header

功能：

- 展示网站名称或个人署名。
- 展示主导航。
- 移动端显示折叠菜单。
- 当前页面高亮。

导航项：

- 首页
- 摄影
- 视频
- 关于
- 联系

### 2. Footer

功能：

- 展示版权信息。
- 展示社交平台链接。
- 展示邮箱或其他联系方式。

### 3. WorkGrid

功能：

- 接收作品数组。
- 按网格展示作品卡片。
- 支持摄影和视频两种类型。

### 4. WorkCard

功能：

- 展示封面图。
- 展示标题、年份、类别。
- 摄影作品点击进入详情页或打开大图。
- 视频作品点击进入详情页或打开播放弹窗。

### 5. FilterBar

功能：

- 展示作品分类。
- 切换分类后过滤作品。
- 默认包含 `全部`。

### 6. Lightbox

功能：

- 大图浏览。
- 上一张 / 下一张。
- 关闭预览。
- 移动端滑动浏览。

### 7. VideoModal

功能：

- 播放视频链接或嵌入第三方视频。
- 支持关闭。
- 弹窗打开时禁止页面背景滚动。

## 七、数据结构

作品数据统一放在 `src/data/works.js`。

摄影作品示例：

```js
export const works = [
  {
    id: "city-night",
    type: "photo",
    category: "street",
    title: "城市夜色",
    year: "2026",
    location: "Shanghai",
    cover: "/images/photography/city-night-cover.webp",
    images: [
      "/images/photography/city-night-01.webp",
      "/images/photography/city-night-02.webp",
      "/images/photography/city-night-03.webp"
    ],
    description: "一组关于城市夜晚光线、人群和街道情绪的摄影作品。"
  }
];
```

视频作品示例：

```js
export const works = [
  {
    id: "travel-film",
    type: "video",
    category: "travel",
    title: "旅行短片",
    year: "2026",
    location: "Hangzhou",
    cover: "/images/video-covers/travel-film.webp",
    videoUrl: "https://example.com/video",
    description: "一支以城市、自然和人物状态为主题的旅行影像。"
  }
];
```

个人信息可以放在 `src/data/profile.js`：

```js
export const profile = {
  name: "你的名字",
  role: "摄影 / 视频 / 视觉创作",
  location: "China",
  bio: "这里填写简短个人介绍。",
  email: "your@email.com",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/1742808012-droid"
    }
  ]
};
```

## 八、页面实现细节

### 1. 首页

首页结构：

- 顶部导航。
- 首屏主视觉。
- 精选作品。
- 简短关于。
- 联系入口。

实现要点：

- 首屏使用 `public/images/hero/` 中的图片或视频。
- 精选作品从 `works.js` 中筛选 `featured: true` 的项目。
- 首页不放过多文字，以视觉展示为主。
- 首屏下方露出精选作品区域，引导继续滚动。

### 2. 摄影页

页面结构：

- 页面标题。
- 分类筛选。
- 摄影作品网格。

实现要点：

- 从 `works.js` 中筛选 `type === "photo"`。
- 分类来源可以从数据中自动提取。
- 图片使用 `loading="lazy"`。
- 图片容器设置固定比例，避免加载时页面跳动。

### 3. 视频页

页面结构：

- 页面标题。
- 分类筛选。
- 视频封面网格。

实现要点：

- 从 `works.js` 中筛选 `type === "video"`。
- 封面比例统一为 16:9。
- 点击卡片后打开弹窗播放或进入详情页。
- 首页和列表页优先加载封面图，不直接加载视频文件。

### 4. 作品详情页

页面结构：

- 作品标题。
- 年份、地点、类别。
- 项目介绍。
- 图片组或视频播放器。
- 上一个 / 下一个作品入口。

实现要点：

- 通过 URL 参数 `id` 查找作品。
- 找不到作品时显示 404 状态。
- 图片作品展示完整组图。
- 视频作品展示播放器和项目说明。

### 5. 关于页

页面结构：

- 个人照片。
- 简短介绍。
- 服务方向。
- 技术或设备信息。

实现要点：

- 文案保持自然，不写成长篇履历。
- 服务方向可用简短列表展示。
- 移动端个人照片放在文字上方。

### 6. 联系页

页面结构：

- 合作说明。
- 邮箱。
- 社交平台链接。
- 可选二维码。

实现要点：

- 邮箱使用 `mailto:` 链接。
- 外部链接使用 `target="_blank"` 和 `rel="noreferrer"`。
- 二维码图片放在 `public/images/profile/`。

## 九、样式规范

### 1. 基础风格

首版建议使用暗色影像画廊风格：

```css
:root {
  color-scheme: dark;
  --color-bg: #0f0f0f;
  --color-surface: #181818;
  --color-text: #f5f5f5;
  --color-muted: #a7a7a7;
  --color-line: #2a2a2a;
  --color-accent: #d7b98e;
}
```

### 2. 布局规则

- 页面最大内容宽度建议为 `1200px` 到 `1440px`。
- 页面左右边距移动端不少于 `20px`。
- 卡片圆角控制在 `8px` 以内。
- 图片比例用 `aspect-ratio` 固定。
- 避免文字压在关键画面主体上。
- 移动端按钮和链接点击区域不小于 `44px`。

### 3. 响应式断点

建议断点：

```css
@media (max-width: 900px) {
  /* 平板和小屏桌面 */
}

@media (max-width: 640px) {
  /* 手机 */
}
```

## 十、素材处理规范

### 1. 图片

- 原图不建议直接放入网站。
- 展示图建议宽度 `1600px` 到 `2400px`。
- 封面图建议单独裁切。
- 推荐使用 `.webp`。
- 单张图片建议控制在 `300KB` 到 `900KB`。

推荐目录：

```text
public/images/photography/
  city-night-cover.webp
  city-night-01.webp
  city-night-02.webp
```

### 2. 视频

- 长视频优先放在第三方平台。
- 首页背景视频建议控制在 `5MB` 到 `15MB`。
- 视频封面必须单独准备。
- 本地视频放入 `public/videos/`。

推荐目录：

```text
public/videos/
  hero-loop.mp4
```

## 十一、SEO 实现

在 `index.html` 中设置基础信息：

```html
<title>个人摄影与视频作品集</title>
<meta name="description" content="摄影、视频与视觉创作作品展示。" />
<meta property="og:title" content="个人摄影与视频作品集" />
<meta property="og:description" content="摄影、视频与视觉创作作品展示。" />
<meta property="og:image" content="/images/hero/og-cover.webp" />
```

后续如果需要每个作品详情页独立 SEO，可以引入 `react-helmet-async`。

## 十二、性能优化

首版必须完成：

- 图片懒加载。
- 图片使用 WebP。
- 固定图片展示比例，减少布局跳动。
- 首页视频设置 `muted`、`playsInline`、`poster`。
- 不在列表页直接加载大视频。
- 构建前检查生产包大小。

可选优化：

- 为不同屏幕提供多尺寸图片。
- 使用 CDN。
- 使用预加载优化首屏主视觉。

## 十三、可访问性

需要注意：

- 图片设置有意义的 `alt`。
- 按钮使用明确的 `aria-label`。
- 视频提供封面和标题说明。
- 文字和背景保持足够对比度。
- 键盘可以关闭弹窗。
- 弹窗打开后焦点不要丢失。

## 十四、开发顺序

建议按以下顺序实现：

1. 初始化 Vite + React 项目。
2. 建立目录结构。
3. 配置全局样式。
4. 配置 React Router。
5. 实现 Header 和 Footer。
6. 创建作品数据文件。
7. 实现 WorkCard 和 WorkGrid。
8. 实现首页。
9. 实现摄影页。
10. 实现视频页。
11. 实现作品详情页。
12. 实现关于页。
13. 实现联系页。
14. 实现分类筛选。
15. 实现图片预览或视频弹窗。
16. 做移动端适配。
17. 做性能优化。
18. 构建并部署。

## 十五、验收标准

首版完成后应满足：

- 网站可以正常启动。
- 首页、摄影页、视频页、关于页、联系页均可访问。
- 导航跳转正常。
- 摄影作品可以正常展示。
- 视频作品可以正常展示封面和播放入口。
- 作品详情页可以根据作品 ID 正常打开。
- 手机端布局无明显错位。
- 文字没有溢出或遮挡。
- 图片加载时页面不明显跳动。
- `npm run build` 成功。
- 线上部署链接可访问。

## 十六、部署到 Vercel

推荐部署步骤：

1. 将代码推送到 GitHub 仓库。
2. 打开 Vercel。
3. 选择导入 GitHub 仓库 `website`。
4. Framework Preset 选择 `Vite`。
5. Build Command 使用 `npm run build`。
6. Output Directory 使用 `dist`。
7. 点击 Deploy。

之后每次 push 到主分支，Vercel 会自动重新部署。

## 十七、部署到 GitHub Pages

如果选择 GitHub Pages，需要修改 `vite.config.js`：

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/website/"
});
```

可以使用 GitHub Actions 自动部署，也可以使用 `gh-pages` 包部署。

安装：

```bash
npm install -D gh-pages
```

在 `package.json` 中增加：

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

执行：

```bash
npm run deploy
```

## 十八、维护方式

### 1. 新增摄影作品

操作步骤：

1. 将图片放入 `public/images/photography/`。
2. 在 `src/data/works.js` 中新增一条 `type: "photo"` 的作品数据。
3. 本地运行确认展示正常。
4. 提交并推送代码。

### 2. 新增视频作品

操作步骤：

1. 将视频封面放入 `public/images/video-covers/`。
2. 如果是本地视频，将视频放入 `public/videos/`。
3. 如果是外部视频，准备视频链接。
4. 在 `src/data/works.js` 中新增一条 `type: "video"` 的作品数据。
5. 本地运行确认展示正常。
6. 提交并推送代码。

### 3. 修改个人信息

操作步骤：

1. 修改 `src/data/profile.js`。
2. 检查关于页和联系页。
3. 提交并推送代码。

## 十九、首版待确认信息

正式开发前需要确认：

- 网站显示名称。
- 个人署名。
- 首页主视觉素材。
- 摄影作品分类。
- 视频作品链接或文件。
- 个人介绍文案。
- 邮箱、微信、社交平台链接。
- 是否需要中英文双语。
- 优先部署到 Vercel 还是 GitHub Pages。

## 二十、首版开发结论

首版应以“快速上线一个高质量摄影/视频作品展示网站”为核心，不引入复杂后台或重型功能。所有作品数据先通过代码文件维护，确保结构简单、部署稳定、视觉体验完整。上线后再根据作品数量和维护频率决定是否增加 CMS、博客、多语言和预约功能。
