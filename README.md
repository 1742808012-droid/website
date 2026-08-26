# 个人摄影与视频作品展示网站

一个基于 Vite + React 的个人作品集网站，适合展示摄影作品、视频作品、个人介绍和联系方式。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## GitHub Pages 部署

这个项目已经配置了 GitHub Actions 自动部署。代码推送到 GitHub 仓库 `1742808012-droid/website` 的 `main` 分支后，可在仓库设置中启用 GitHub Pages：

1. 打开 GitHub 仓库的 `Settings`。
2. 进入 `Pages`。
3. `Build and deployment` 的 `Source` 选择 `GitHub Actions`。
4. 推送代码到 `main` 分支。
5. 等待 Actions 执行完成。

部署完成后的访问地址预计为：

```text
https://1742808012-droid.github.io/website/
```

如果你想要类似 `https://nutcow.github.io/ningning/` 的地址，需要满足：

- GitHub 用户名或组织名是 `nutcow`。
- 仓库名是 `ningning`。
- Vite 的 GitHub Pages base 配置改为 `/ningning/`。

## 更新作品

作品数据位于 `src/data/works.js`。图片放在 `public/images/` 下，视频封面放在 `public/images/video-covers/`。
