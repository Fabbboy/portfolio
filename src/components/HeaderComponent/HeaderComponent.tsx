const HeaderComponent = () => {
  return (
    <header className="w-full bg-neutral-800 text-neutral-100 p-4 rounded-xl shadow-md">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
          <h1 className="text-xl font-semibold">Portfolio</h1>
        </div>
        <button className="p-2 bg-blue-700 rounded hover:bg-blue-600">
          <p className="text-md font-regular">Get in Touch</p>
        </button>
      </nav>
    </header>
  );
};

export default HeaderComponent;
