const HeaderComponent = () => {
  return (
    <header className="w-full bg-neutral-800 text-neutral-100 p-4 rounded-xl">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-neutral-400">
            Home
          </a>
          <a href="#" className="hover:text-neutral-400">
            Projects
          </a>
          <a href="#" className="hover:text-neutral-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
