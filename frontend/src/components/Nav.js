import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/auth/login" className="mr-4">Login</Link>
      <Link href="/auth/register" className="mr-4">Register</Link>
      <Link href="/dashboard" className="mr-4">Dashboard</Link>
      <Link href="/journal">Journals</Link>
    </nav>
  );
}
