import Link from 'next/link';
import { HiPlusCircle } from 'react-icons/hi';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-indigo-950 px-8 py-3 text-slate-300">
      <Link className="font-bold" href={'/'}>
        RPH Shop
      </Link>
      <Link href={'/add'}>
        <HiPlusCircle size={24} />
      </Link>
    </nav>
  );
}
