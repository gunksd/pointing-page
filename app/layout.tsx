import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Awan - 热爱可抵岁月漫长",
  description: "Awan的个人主页，展示我的项目和技能",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5%22 /><path d=%22M9 18h6%22 /><path d=%22M10 22h4%22 /></svg>"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              LA.init({ id: '3HTdvOqsAGXYoW12', ck: '3HTdvOqsAGXYoW12' })
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}



import './globals.css'
