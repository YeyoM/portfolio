export default function Navbar() {
  return (
    <div className="flex items-center w-full justify-center fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex items-center sm:justify-between py-6 w-full max-w-[1280px]">
        { /* Left side */}
        <div className="flex items-center space-x-4 ml-6">
          <a className="font-semibold text-xl text-[#2292BF] tracking-wide sm:text-2xl" href="/">
            Diego Moreno
          </a>
        </div>
        { /* Right side */}
        <div className="flex items-center space-x-1 sm:space-x-4 text-sm sm:text-lg ml-8 sm:mr-6">
          <a href="/about" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] sm:tracking-wider">about me</a>
          <span className="text-gray-600">/</span>
          <a href="/" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] sm:tracking-wider">work</a>
          <span className="text-gray-600">/</span>
          <a href="https://drive.google.com/file/d/189w1ZftPhTsdMcLlOGAJrNfk8v9-Gzzl/view?usp=sharing" target='_blank' className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] sm:tracking-wider">resume</a>
        </div>
      </div>
    </div>
  )
}