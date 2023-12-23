import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      {/* Top navbar */}
      <div className="flex items-center w-full justify-center fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="flex items-center justify-between py-6 w-full max-w-[1280px]">
        { /* Left side */}
        <div className="flex items-center space-x-4 ml-6">
          <a className="font-semibold text-2xl text-[#2292BF] tracking-wide" href="/">Diego Moreno</a>
        </div>
        { /* Right side */}
        <div className="flex items-center space-x-4 mr-6">
          <a href="/about" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">about me</a>
          <span className="text-gray-600">/</span>
          <a href="/" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">work</a>
          <span className="text-gray-600">/</span>
          <a href="https://drive.google.com/file/d/1ofyxwcS4hPEueNt7ZfQlibo1MRdBq_ie/view?usp=sharing" target='_blank' className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">resume</a>
        </div>
        </div>
      </div>
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
        

        {/* Footer */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-0">
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex items-center space-x-4 mr-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">email</a>
              <span className="text-gray-600">/</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">LinkedIn</a>
              <span className="text-gray-600">/</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">GitHub</a>
              <span className="text-gray-600">/</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">Instagram</a>
            </div>
            <p className="text-md font-normal text-black tracking-wide mt-6 mb-12">
              © 2023 YeyoM
            </p>
          </div>
        </div>

      </div>

      {/* Orbs */}
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[10rem] right-[20rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[15rem] left-[10rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[40rem] right-[25rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      
    </main>
  )
}
