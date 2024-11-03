import Image from "next/image";

export default function Main() {
  return (
    <div className="parentContainer">
      <div className="text"><h1>PROJECTS</h1><h2>Lorum </h2>
      <i className="bi bi-arrow-left"></i>
      <i className="bi bi-arrow-right"></i>
      <ul><img src="slide-numbers.png" alt="number" /></ul>
      </div>
      <div className="imageContainer">
        <img src="Rectangle 6.png" alt="Rectangle" />
        <button className="viewbutton">VIEW PROJECTS<i className="bi bi-arrow-right"></i></button>
      </div>
        <div className="aboutContainer"></div>
    </div>
  );
}
