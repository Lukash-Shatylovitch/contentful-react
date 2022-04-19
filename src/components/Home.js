import { useEffect, useState } from "react";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);


  useEffect(() => {
    client
      .getEntries({
        content_type: "carousel",
      })
      .then((entries) => {
        setSlides(entries.items);
      })
      .catch(console.error);
  }, []);


  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mx-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {slides.length ? (
          <div className="carousel-inner">
            {slides.map((slide, index) => {
              return (
                <div
                  className={!index ? "carousel-item active" : "carousel-item"}
                >
                  <img
                    src={`https:${slide.fields.pic.fields.file.url}`}
                    className="d-block w-100 display-relative"
                    alt="..."
                  />
                  <div className="imgOverlay"></div>
                  <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-start">
                    <h5 className="display-4 fw-bolder z-top">
                      {slide.fields.brand}
                      <span className="copyright">©</span>
                    </h5>
                    <p className="carousel z-top">{slide.fields.message}</p>
                    <button
                      onClick={() => {
                        navigate(`/recipes`);
                      }}
                      className="btn btn-outline-light btn-dark  mt-3 py-2 px-5 z-top"
                    >
                      More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "Here we go"
        )}

        <button
          className="carousel-control-prev indicator"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next indicator"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
    </>
  );
}

        