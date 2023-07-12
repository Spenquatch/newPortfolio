import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        // console.log(
        //   m.pageY,
        //   e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
        //   e.offsetTop
        // );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
      <div className="name">Projects I built, managed, or worked on.</div>
        {/* <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Video
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-music")}`}
              onClick={handleFilterKeyChange("f-music")}
              data-text="Music"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-music" />
              Music
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-links")}`}
              onClick={handleFilterKeyChange("f-links")}
              data-text="Links"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-links" />
              Links
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-image")}`}
              onClick={handleFilterKeyChange("f-image")}
              data-text="Image"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-image" />
              Image
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-gallery")}`}
              onClick={handleFilterKeyChange("f-gallery")}
              data-text="Gallery"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-gallery" />
              Gallery
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-content")}`}
              onClick={handleFilterKeyChange("f-content")}
              data-text="Content"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-content" />
              Content
            </label>
          </div>
        </div> */}
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        
        <div className="box-item f-links">
          <div className="image">
            <a
              href="https://simssoftware.com"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images\work\simssoftwareWebsite.webp" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Project Management - Development</span>
                      <span className="name">SIMS Software</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-links">
          <div className="image">
            <a
              href="https://online.dentalhospital.ie/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images\work\trinityCollege.webp" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Project Management - Development</span>
                      <span className="name">Trinity College Dublin</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>        
        
        
        
        
        
        
      </div> 
    </Fragment>
  );
};
export default ItemIsotope;
