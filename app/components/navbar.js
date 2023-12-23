export default function Navbar() {
  return (
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
  )
}