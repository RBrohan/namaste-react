const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOzP33YEpqlHMBoLmXcZWDgA8T8haRLh0tQ&usqp=CAU"
        />
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for products..."
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="icon-container">
        <img
          className="icon"
          src="https://img.icons8.com/?size=512&id=7819&format=png"
          alt="User Icon"
        />
      </div>
    </div>
  );
};

export default Header;
