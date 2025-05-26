import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="text-bold mb-4 ml-10 text-4xl text-white">
        About Me
      </div>
      <div className="mx-10 mb-10 flex justify-between">
        <div className="text-white/80">
          <p className="leading-10">嗨，你好，我是Awan。</p>
          <p className="leading-10">热爱编程、摄影、读书、旅行。</p>
          <p className="leading-10">热爱计算机科学和 IT 互联网事业，希望能成为一名优秀的开发者。</p>
          <p className="leading-10">我们正在让这个世界变得更加美好，通过代码的重复使用和延展构建完美体系。</p>
          <p className="leading-10">We're making the world a better place. Through constructing elegant hierarchies for maximum code reuse and extensibility.</p>
        </div>
        <Image
          src="/placeholder.svg"
          alt="avatar"
          width={100}
          height={100}
          className="hidden rounded-full h-25 w-25 transition md:block hover:-translate-y-2"
        />
      </div>
    </>
  )
}
