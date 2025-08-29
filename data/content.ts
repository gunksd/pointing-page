import type { NavLink, Project, SocialLink } from "@/types"

export const titleList: string[] = [
  "热爱……",
  "敬畏之心！",
  "赞美之心！",
  "我很好奇！",
  "你好，请多指教",
  "*舒缓的现代音乐*",
  "希望能成为有趣的人",
  "相信美好的事情即将发生",
  "平凡的日子里每天都有奇迹",
  "你所热爱的<br/>就是你的生活",
  "给时光以生命<br/>给岁月以文明",
  "路虽远行则将至<br/>事虽难做则必成",
  "一望无际的迷雾中<br/>有人在寻找光明",
  "当你在凝视着网页的时候<br/>网页也正在凝视着你",
]

export const navLinks: NavLink[] = []

export const myProjects: Project[] = [
  { name: "Home", description: "个人简介、主页、引导页", link: "https://github.com/gunksd/gunksd" },
  { name: "Blog", description: "个人博客，学习&随笔", link: "https://gunksd.github.io/" },
  { name: "Airdrop", description: "空投聚合器网站", link: "https://www.airdrop-yupaopao.xyz/" },
  { name: "Web3导航", description: "Web3项目导航和资源整理", link: "https://awansmith.cn" },
]

export const socialLinks: SocialLink[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    link: "https://github.com/gunksd",
    label: "Github",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    link: "https://x.com/wnyn12075574",
    label: "Twitter",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    link: "https://www.youtube.com/@gunksd",
    label: "YouTube",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.456 10.728c0-4.205-2.443-6.294-6.456-6.294-4.536 0-7 2.814-7 6.931 0 3.175 1.647 5.635 4.456 5.635 1.823 0 2.544-1.271 2.544-2.271 0-.636-.273-1.362-.273-2.089 0-1.271.727-1.995 1.909-1.995 1.636 0 2.456 1.271 2.456 2.995 0 2.089-1.273 3.634-3 4.27-.636.273-.909.636-.909 1.271 0 .636.273 1.09.909 1.362 2.636 1.09 5.456 3.27 5.456 6.931 0 2.725-1.636 4.452-4.272 4.452h-2.184c-.636 0-1.09.454-1.09 1.09s.454 1.09 1.09 1.09h2.184c3.997 0 7.272-2.724 7.272-7.452 0-4.997-3.456-7.452-6.635-8.361 1.727-.636 2.909-2.36 2.909-4.27zm-2 .545c0 1.09-.636 1.909-1.636 1.909-.727 0-1.364-.636-1.364-1.364 0-.909.636-1.636 1.636-1.636s1.364.636 1.364 1.091z"/></svg>',
    link: "https://www.zhihu.com/people/amzhai-xiao-yu",
    label: "知乎",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.8 6.4c.8.4 1.6 1.2 2 2.4.8 2.8-.8 6-3.6 7.2-2.8.8-6-.8-7.2-3.6s.8-6 3.6-7.2c2.8-.8 6 .8 7.2 3.6.4-.4.4-1.2 0-1.6s-1.2-.4-1.6 0c-1.6-1.6-4-2-6-1.2s-3.2 2.8-2.4 4.8 2.8 3.2 4.8 2.4 3.2-2.8 2.4-4.8c-.4.4-.4 1.2 0 1.6s1.2.4 1.6 0c.4.4 1.2.4 1.6 0s.4-1.2 0-1.6z"/></svg>',
    link: "https://www.xiaohongshu.com/user/profile/62ad667d000000001b02a7a1?xsec_token=YBg7My6dYRQwr771n0P9U5-i6wiDU41i4S3IFP9cJXFt4%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=62ad667d000000001b02a7a1&apptime=1756469858&share_id=d8045d2a23184e48bdac6a851c86a5b5&share_channel=copy_link",
    label: "小红书",
  },
]
