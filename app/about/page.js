import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="flex flex-row w-[90%] max-w-[990px] mt-36 h-auto">
          {/* Left side */}
          <div className='w-full'>
            <h3 className="text-5xl font-normal text-black tracking-wide mb-10">
              hi there!
            </h3>
            <p className="text-xl font-normal text-black tracking-wide">
              I am Diego, a computer science student at Universidad Autónoma de Aguascalientes, Mex. <br /> <br />
              I have a strong passion for software engineering and all the exciting aspects that come with it. <br /> <br />
              Throughout my academic journey, I have developed a keen interest in frontend development and Site Reliability Engineering.<br /> <br />
              I love music and playing my guitar to indie beats. I also enjoy playing and watching basketball (I’ve been a Spurs fan since 2017).<br /> <br />
              There is much more stories that I can’t cover in here but that I would love to share with you. Feel free to reach out via the links in the footer below!
            </p>
          </div>
          {/* Right side */}
          <div className='w-full flex flex-col items-center justify-center'>
            {/* Collage */}
            <Image
              src="/img-1.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative z-10 top-[20px] left-[-95px]"
            />
            <Image
              src="/img-2.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative z-10 top-[-80px] left-[105px]"
            />
            <Image
              src="/img-3.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative z-10 top-[-180px] left-[-95px]"
            />
            <Image
              src="/img-4.png"
              alt="Picture of the author"
              width={226}
              height={226}
              className="relative z-10 top-[-270px] left-[105px]"
            />
            <p className="text-xl font-light italic  text-black tracking-wide mt-10 relative z-10 top-[-280px] left-[60px]">
              Me and some cool folks :)
            </p>
          </div>
        </div>
        
        <Footer />

      </div>

      {/* Orbs */}
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[10rem] right-[20rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[15rem] left-[10rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[40rem] right-[25rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      
    </main>
  )
}
