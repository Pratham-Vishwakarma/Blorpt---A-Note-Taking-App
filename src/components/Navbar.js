import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.css"; // Assuming you'll add styles for the navbar

const Navbar = ({
  saveNote,
  loadNote,
  exportTextNote,
  exportDrawing,
  saveNoteToCloud,
  loadNoteFromCloud, 
  toggleDarkMode, 
  isDarkMode
}) => {
  const [user, setUser] = useState(null);

  // Firebase Authentication State Change Listener
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Log out function
  const logOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);  // Clear user state after logout
    } catch (error) {
      console.error("Error during sign-out: ", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* File Dropdown - Converted to Offcanvas */}
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasFile"
                  aria-controls="offcanvasFile"
                >
                  File
                </button>
              </li>

              {/* Home Dropdown - Converted to Offcanvas */}
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasHome"
                  aria-controls="offcanvasHome"
                >
                  Home
                </button>
              </li>

              {/* Draw Dropdown - Converted to Offcanvas */}
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDraw"
                  aria-controls="offcanvasDraw"
                >
                  Draw
                </button>
              </li>

              {/* View Dropdown - Converted to Offcanvas */}
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasView"
                  aria-controls="offcanvasView"
                >
                  View
                </button>
              </li>

              {/* Help Dropdown - Converted to Offcanvas */}
              <li className="nav-item">
                <button
                  className="nav-link"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasHelp"
                  aria-controls="offcanvasHelp"
                >
                  Help
                </button>
              </li>
            </ul>

            <div className="d-flex">
              {/* Dark Mode Toggle */}
              <button
                className="btn btn-outline-secondary"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* User Section */}
            <div className="d-flex">
              {user ? (
                <>
                  <span className="navbar-text">Welcome, {user.displayName || "User"}!</span>
                  <button className="btn btn-outline-danger" onClick={logOut}>Logout</button>
                </>
              ) : (
                <button className="btn btn-outline-primary" onClick={() => {/* Add login/signup function */}}>Login / Sign Up</button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas for File */}
      <div
        className="offcanvas offcanvas-top"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasFile"
        aria-labelledby="offcanvasFileLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasFileLabel">File</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <button onClick={saveNote}>Save Locally</button>
          <button onClick={loadNote}>Load Locally</button>
          <button onClick={exportTextNote}>Export Text</button>
          <button onClick={exportDrawing}>Export Drawing</button>
          <button onClick={saveNoteToCloud}>Save to Cloud</button>
          <button onClick={loadNoteFromCloud}>Load from Cloud</button>
        </div>
      </div>

      {/* Offcanvas for Home */}
      <div
        className="offcanvas offcanvas-top"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasHome"
        aria-labelledby="offcanvasHomeLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasHomeLabel">Home</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-between">
          <div>Font Type</div>
          <div>Font Size</div>
          <div>Bold Text</div>
          <div>Italics</div>
          <div>Strike Through</div>
          <div>Underline</div>
          <div>Subscript</div>
          <div>Superscript</div>
          <div>Bullets & Indices</div>
          <div>Background Colour</div>
          <div>Font Colour</div>
          <div>Indents</div>
          <div>Alignments</div>
        </div>
      </div>

      {/* Offcanvas for Draw */}
      <div
        className="offcanvas offcanvas-top"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasDraw"
        aria-labelledby="offcanvasDrawLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDrawLabel">Draw</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-between">
          <div>Undo</div>
          <div>Redo</div>
          <div>Cursor Select</div>
          <div>Lasso</div>
          <div>Pen Tools</div>
          <div>Add Pen</div>
        </div>
      </div>

      {/* Offcanvas for View */}
      <div
        className="offcanvas offcanvas-top"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasView"
        aria-labelledby="offcanvasViewLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasViewLabel">View</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-between">
          <div>Normal View</div>
          <div>Dock-to-desktop View</div>
          <div>Page Colour</div>
          <div>Rule Lines</div>
          <div>Page Size</div>
          <div>Switch Background</div>
        </div>
      </div>

      {/* Offcanvas for Help */}
      <div
        className="offcanvas offcanvas-top"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasHelp"
        aria-labelledby="offcanvasHelpLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasHelpLabel">Help</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-between">
          <div>Support</div>
          <div>Feedback</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
