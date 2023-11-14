import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex flex-col items-center gap-y-8 min-h-screen mx-auto bg-white px-2 md:w-4/5'>
      <header className="flex w-full justify-between items-center py-8">
        <a href="/dashboard" className="text-5xl font-bold font-mono">MXLGY</a>
        <div className="text-lg font-mono flex gap-8">
          <a href="#" className="hover:underline underline-offset-2 decoration-dotted">About</a>
          <a href="#" className="hover:underline underline-offset-2 decoration-dotted">Support</a>
          <a href="#" className="hover:underline underline-offset-2 decoration-dotted">Blog</a>
        </div>
      </header>
      {children}
      <nav className='fixed bottom-4 bg-white flex justify-between font-extrabold text-xl border-4 border-black rounded-full overflow-hidden'>
        <Link className='px-8 py-4 hover:bg-red-500/20 text-red-500 transition' href={'/dashboard/library'}>Library</Link>
        <Link className='px-8 py-4 hover:bg-blue-500/20 text-blue-500 transition' href={'/dashboard/inventory'}>Inventory</Link>
        <Link className='px-8 py-4 hover:bg-green-500/20 text-green-500 transition' href={'/dashboard/account'}>Account</Link>
      </nav>
      <footer className="hidden md:block fixed bottom-0 right-0 p-4 font-mono text-neutral-600">© 2023 MXLGY</footer>
    </main>
  )
}
