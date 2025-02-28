import Link from 'next/link';

export default function Header() {
  return (
    <>
      <main>
        {' '}
        <div className="bg-teal-600 text-white">
          <div className="container mx-auto  py-4">
            <div className="flex justify-between">
              <div className="flex space-x-8 items-center">
                <Link href="" className="py-3 text-3xl font-bold  hover:text-blue-200 transition">
                  Srilanka Weather
                </Link>

                <Link href="/maps" className="py-3 text-xl  hover:text-blue-200 transition">
                  Weather maps
                </Link>
                <Link href="/gallery" className="py-3 text-xl hover:text-blue-200 transition">
                  Weather Summary
                </Link>
              </div>
              <div className="flex space-x-6 text-xl">
                <Link href="/contact-us" className="py-3 px-2 hover:text-blue-200 transition">
                  Contact Us
                </Link>
                <Link href="login" className="py-3 px-2 hover:text-blue-200 transition">
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
