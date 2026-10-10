function Navbar({ darkMode, setDarkMode, search, setSearch }) {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="EduDashboard home">
        <div className="brand-icon">E</div>
        <div>
          <h2>EduDashboard</h2>
          <p>Student Learning Portal</p>
        </div>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#tasks">Tasks</a>
      </nav>

      <div className="nav-right">
        <div className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search courses..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search courses"
          />
        </div>
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <div className="avatar" title="Saipriya's profile" aria-label="Saipriya">S</div>
      </div>
    </header>
  );
}

export default Navbar;