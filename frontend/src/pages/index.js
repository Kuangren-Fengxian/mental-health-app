export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Mental Health App</h1>
      <p>Start your journey to better mental health.</p>
      <a href="/auth/register" className="text-blue-500">Get Started</a>
    </div>
  );
}