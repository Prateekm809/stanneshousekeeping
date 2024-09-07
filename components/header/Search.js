import React, { useState, useEffect } from 'react';

const Search = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => setMenuActive(!menuActive);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    // Clear previous search results
    setSearchResults([]);

    // Perform in-page search
    const results = performInPageSearch(searchTerm);
    setSearchResults(results);
  };

  const performInPageSearch = (term) => {
    const regex = new RegExp(term, 'gi');
    const elements = document.body.getElementsByTagName('*');
    const results = [];

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        const text = element.textContent;
        if (regex.test(text)) {
          results.push({
            id: i,
            element: element,
            text: text
          });
        }
      }
    }

    return results;
  };

  const highlightSearchTerm = (text, term) => {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  const scrollToResult = (element) => {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleResultClick = (result) => {
    // Highlight the result
    result.element.innerHTML = highlightSearchTerm(result.text, searchTerm);

    // Scroll to the highlighted result
    scrollToResult(result.element);

    // Clear search results after clicking
    setSearchResults([]);
  };

  useEffect(() => {
    // Clean up highlights when component unmounts or search term changes
    return () => {
      document.querySelectorAll('mark').forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize();
      });
    };
  }, [searchTerm]);

  return (
    <div className="header-search-form-wrapper">
      <div className="cart-search-contact">
        <button onClick={toggleMenu} className="search-toggle-btn">
          <i className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i>
        </button>
        <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
          <form onSubmit={handleSearch}>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit"><i className="fi ti-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleResultClick(result);
                  }}
                  dangerouslySetInnerHTML={{ __html: highlightSearchTerm(result.text, searchTerm) }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
