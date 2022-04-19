import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../client";



export default function Nav() {
  const [logoImg, setLogoImg] = useState("");

  useEffect(() => {
    client
      .getEntry({
        content_type: "logo",
      })
      .then((entry) => {
        console.log(entry);
        setLogoImg(entry.fields.logo.fields.file.url);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            {logoImg ? (
              <img
                src={`https:${logoImg}`}
                className="img-fluid logoImg"
                alt="LOGO"
              ></img>
            ) : (
              "Logo"
            )}
          </NavLink>
          <h2>Micah & Lucas Recepies</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recipes">
                  Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    </div>

  );
}


