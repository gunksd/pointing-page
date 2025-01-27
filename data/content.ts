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
  { name: "Vue", description: "Vue.js 项目集合", link: "https://github.com/gunksd/vue" },
  { name: "OrderManager", description: "订单管理系统", link: "https://github.com/gunksd/order-management" },
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
]

