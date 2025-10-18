export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">Codex Vitae</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="/" className="hover:text-indigo-300">Dashboard</a></li>
            <li><a href="/create" className="hover:text-indigo-300">Criar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
