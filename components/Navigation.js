import Link from "next/link";

const navigation = [
  { name: 'Archive', href: '#' },
  { name: 'Tutorials', href: '#' },
  { name: 'About Me', href: '#' },
  { name: 'Contact', href: '#'}
]

export const Navigation = () => {
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-red-500 lg:border-none">
          <div className="flex items-center">
            <Link passHref href="/">
            <a className="text-white text-4xl italic font-bold">
              EffJS
              <span className="block text-base text-center text-red-500">Fritz's{" "}Blog</span>
            </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-rose-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-red-500 hover:bg-red-50"
            >
              Join My Mailing List
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-rose-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}