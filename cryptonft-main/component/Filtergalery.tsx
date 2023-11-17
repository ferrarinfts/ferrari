import { useEffect } from "react";
import { useRouter } from 'next/router';
const Filtergalery: React.FC = () => {
    const router = useRouter();
    const imageUrls = [
       { imageUrl: './ferrai.avif',category: 'sportscar',},
        { imageUrl:'./ferrai2.avif',category: 'sportscar',},
        { imageUrl:'./ferrai3.avif',category: 'classiccars',},
        { imageUrl:'./ferrai4.avif',category: 'classiccars',},
        { imageUrl:'./ferrai5.avif',category: 'ltdedition',},
        { imageUrl:'./ferrari6.avif',category: 'ltdedition',},
        { imageUrl:'./ferrai7.avif',category: 'conceptcars',},
        { imageUrl:'./ferrari8.avif',category: 'conceptcars',},
       
      ];
    const data = Array(12).fill(null);
  useEffect(() => {
    const menuItems = document.querySelectorAll(".portfolio-menu li");
    const portfolioItems = document.querySelectorAll(".portfolio-item .item");

    menuItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        const clickedMenuItem = event.target as HTMLElement;

        // Remove 'active' class from all menu items
        menuItems.forEach((menuItem) => menuItem.classList.remove("active"));

        // Add 'active' class to the clicked menu item
        clickedMenuItem.classList.add("active");

        // Get the filter value from the clicked menu item
        const selector = clickedMenuItem.getAttribute("data-filter");

        // Filter portfolio items based on the selector
        portfolioItems.forEach((item: any) => {
          const category = item.getAttribute("data-category");
          if (selector === "all" || selector === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }, []);

  return (
    <>
      <div className="portfolio-menu mt-2 mb-4">
        <ul>
          <li className="btn btn-outline-light active" data-filter="all">
            All
          </li>
          <li className="btn btn-outline-light" data-filter="sportscar">
            Sports Cars
          </li>
          <li className="btn btn-outline-light" data-filter="classiccars">
            Classic Cars
          </li>
          <li className="btn btn-outline-light text" data-filter="ltdedition">
            Limited Editions
          </li>
          <li className="btn btn-outline-light" data-filter="conceptcars">
            Concept Cars
          </li>
        </ul>
      </div>
      <div className="portfolio-item row">



      {imageUrls.map((item, index) => (
        <div
          key={index} 
          className="item col-lg-3 col-md-4 col-sm-6"
          data-category={item.category}
        >
          <div className="NftTrendCard nft_item">
            <div className="wrap-img">
              <img className="img-fluid" src={item.imageUrl} alt="" />
            </div>
            <div className="nft_item_info">
              <h4>
                Classic Car <a href="">Ferrari</a>
              </h4>
              <div className="nft_item_price">
                <div className="me-auto">
                  Token: <span>100</span>
                </div>
                <div className="ms-auto tok">
                  <i className="bi bi-heart"></i>
                  <span>80</span>
                </div>
              </div>
              <button className="btn btn-light btn-buy" onClick={() =>router.push("/buy")}>BUY</button>

            </div>
          </div>
        </div>
      ))}
      </div>
      {/* <ul className="portfolio-menu">
        <li data-filter="filter1">ALl</li>
        <li data-filter="filter2">Sports Car</li>
        <li data-filter="filter3">Clasic Cars</li>
        <li data-filter="filter4">Limited Edition</li>
        <li data-filter="filter5">Concept Cars</li>
      </ul> */}

      {/* <div className="portfolio-item" data-category="filter1">
        Item 1
      </div>
      <div className="portfolio-item" data-category="filter2">
        Item 2
      </div>
      <div className="portfolio-item" data-category="filter3">
        Item 3
      </div> */}
    </>
  );
};

export default Filtergalery;
