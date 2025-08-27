# 🌟 Pointing Page

> 一个现代化的个人主页，展示个人信息、项目作品和音乐播放器

![项目预览](show.png)

## ✨ 特性

- 🎵 **内置音乐播放器** - 集成 APlayer，支持音乐播放
- 🌙 **深色模式支持** - 自动适应系统主题或手动切换
- 📱 **响应式设计** - 完美适配各种设备尺寸
- ⚡ **现代化技术栈** - 基于 Next.js 15 和 React 19
- 🎨 **精美 UI 组件** - 使用 Radix UI 和 Tailwind CSS
- ✨ **星空背景动效** - 沉浸式视觉体验

## 🛠️ 技术栈

- **框架**: Next.js 15 + React 19
- **样式**: Tailwind CSS + Radix UI
- **音频播放**: APlayer
- **类型检查**: TypeScript
- **包管理器**: pnpm

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- pnpm (推荐) 或 npm

### 安装和运行

1. **克隆项目**
```bash
git clone <repository-url>
cd pointing-page
```

2. **安装依赖**
```bash
pnpm install
# 或者
npm install
```

3. **启动开发服务器**
```bash
pnpm dev
# 或者
npm run dev
```

4. **打开浏览器**
访问 [http://localhost:3000](http://localhost:3000)

### 构建部署

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 📁 项目结构

```
pointing-page/
├── app/                    # Next.js App Router
├── components/             # React 组件
│   ├── ui/                # UI 基础组件
│   ├── MusicPlayer.tsx    # 音乐播放器
│   └── ...
├── data/                   # 数据配置
├── hooks/                  # 自定义 Hooks
├── lib/                    # 工具函数
├── public/                 # 静态资源
│   └── music/             # 音乐文件
├── styles/                 # 全局样式
└── types.ts               # TypeScript 类型定义
```

## 🎵 音乐播放器

项目内置了基于 APlayer 的音乐播放器，支持：

- 播放/暂停控制
- 进度条拖拽
- 音量调节
- 播放列表切换

音乐文件放置在 `public/music/` 目录下。

## 🎨 自定义配置

- **主题颜色**: 修改 `tailwind.config.ts`
- **个人信息**: 编辑 `data/content.ts`
- **音乐列表**: 更新 `components/MusicPlayer.tsx`

## 🤝 贡献

欢迎 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues

---

⭐ 如果这个项目对你有帮助，请给它一个星星！
