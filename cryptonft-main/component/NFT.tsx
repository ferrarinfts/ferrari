import React from "react";
import Filtergalery from "./Filtergalery";
import { stylingcss } from "@/utils/styles";
import carnft9 from "@/public/carnft9.jpg";
import Footer from "./Footer";
import { useRouter } from "next/router";
const NFTCard: React.FC = () => {
  const router = useRouter();

  const style = stylingcss();
  return (
    <>
      <section className="Main_NFT">
        <div className="container">
          <div className="nft_grd">
            <div className="col_gd1">
              <div className="leftTopNFT">
                <div className="topNftHeading">
                  <h2>
                    <span>Explore and Acquire Exclusive NFTs</span> Own a Piece
                    of Digital History
                  </h2>
                </div>
                <div className="topNftpara">
                  <p>
                    Welcome to the world of mystery NFTs, where the digital and
                    the enigmatic collide. Here, you'll discover a unique and
                    captivating collection of digital treasures, each shrouded
                    in mystery. Our mystery NFTs offer a thrilling blend of art,
                    technology, and the unknown, promising exciting surprises
                    for those who dare to explore. Uncover hidden gems,
                    exclusive content, and the unexpected as you embark on a
                    digital adventure like no other.
                  </p>
                  <ul className="list-m">
                    <li>
                    Explore an intriguing world of digital collectibles where each mystery NFT is a gateway to unlocking hidden treasures
                    </li>
                    <li>
                    Experience the perfect fusion of digital artistry and the thrill of the unknown in every mystery NFT.
                    </li>
                    <li>
                    Acquire these NFTs to reveal unique content, whether it's rare artwork, exclusive media, or other surprises.
                    </li>
                    <li>
                    Every mystery NFT acquisition is a digital adventure, offering an element of surprise and anticipation with each reveal.
                    </li>
                  </ul>
                </div>
                <div className="visible-lg">
                <div className="topNftButton ">
                  <button
                    type="button"
                    className="green-btn btn btn-primary"
                    onClick={() => router.push("/claim")}
                  >
                    CLAIM MYSTERY BOX
                  </button>
                  <button
                    type="button"
                    className="green-btn btn btn-primary"
                    onClick={() => router.push("/claim")}
                  >
                    BUY MYSTERY BOX
                  </button>
                </div>
                </div>
              
                <br />
                <div className="TopNftrate">
                  <div className="rateDiv">
                    <h4>34+</h4>
                    <h6>Sports Car</h6>
                  </div>
                  <div className="rateDiv">
                    <h4>49+</h4>
                    <h6>Classic Car</h6>
                  </div>
                  <div className="rateDiv">
                    <h4>48+</h4>
                    <h6>Limited Editions</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_gd2 bg-1">
              <div className="RytTopNFT">
                <div className="NftSlider">
                  <div
                    id="nft-slide"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#nft-slide"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#nft-slide"
                        data-bs-slide-to="1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#nft-slide"
                        data-bs-slide-to="2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#nft-slide"
                        data-bs-slide-to="3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="active carousel-item">
                        <div className="Sliderbanner">
                          <div className="Nftsliderimage">
                            <img
                              alt="abc"
                              decoding="async"
                              data-nimg="1"
                              className="d-block"
                              src="./mystbox2.png"
                              loading="lazy"
                            />
                          </div>
                          <div className="nftslidetext">
                            <div className="lft">
                              <h4>Mystery box</h4>
                              <p>Mystery</p>
                            </div>
                            <div className="ryt">
                              <h4>Super Mystery box</h4>
                              <p>
                                <span> </span>Concept Mystery box
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="Sliderbanner">
                          <div className="Nftsliderimage">
                            <img
                              alt="abc"
                              decoding="async"
                              data-nimg="1"
                              className="d-block"
                              src="./mystbox1.jpeg"
                              loading="lazy"
                            />
                          </div>
                          <div className="nftslidetext">
                            <div className="lft">
                              <h4>Mystery box</h4>
                              <p>Mystery</p>
                            </div>
                            <div className="ryt">
                              <h4>Super Mystery box</h4>
                              <p>
                                <span> </span>Concept Mystery box
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                     
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#nft-slide"
                      data-bs-slide="prev"
                    >
                      <i className="bi bi-arrow-left-circle"></i>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#nft-slide"
                      data-bs-slide="next"
                    >
                      <i className="bi bi-arrow-right-circle"></i>
                    </button>
                  </div>
                </div>
                <div className="visible-xs">
                <div className="topNftButton ">
                  

                  
                  <button
                    type="button"
                    className="green-btn btn btn-primary"
                    onClick={() => router.push("/claim")}
                  >
                    CLAIM MYSTERY BOX
                  </button>
                  <button
                    type="button"
                    className="green-btn btn btn-primary"
                    onClick={() => router.push("/claim")}
                  >
                    BUY MYSTERY BOX
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="TrendingDrops" style={style}>
        <div className="container">
          <div className="trendHead">
            <h2>Trending Cars</h2>
          </div>
          {/* <div className="TrendingDropsData">
            <div className="TrendDropItems1">
              <div className="TrddopinnerItems">
                <div className="ExplrCategories">
                  <div className="nftSidehead"><h4>Explore by Categories</h4></div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="All"
                      value="All"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      All
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Sports Cars"
                      value="Sports Cars"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Sports Cars
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Clasic Cars"
                      value="Clasic Cars"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Clasic Cars
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Limited Edition"
                      value="Limited Edition"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Limited Edition
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Concept Cars"
                      value="Concept Cars"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Concept Cars
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="TrendDropItems2">
                        <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrai2.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    <div className="me-auto">Token: <span>100</span></div>
                                    <div className="ms-auto"><i className="bi bi-heart"></i><span>80</span></div> 
                                </div>
                                                                 
                            </div>
                            
                          </div>
                           <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrai3.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
                            <img
                              width="300"
                              height="400"
                              decoding="async"
                              data-nimg="1"
                              className="nftCardImage"
                              src="./ferrai4.avif"
                            // style=""
                              loading="lazy"
                            /></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrai5.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrari6.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrari8.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                All <a href="">Ferrari Roma
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>80</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                    </div>
                </div> */}
          <div className="row">
            <div className="col-lg-12 text-center my-2">
              <Filtergalery></Filtergalery>
            </div>
          </div>
        </div>
      </section>
      <section className="exploreMore">
        <div className="container">
          <div className="trendHead">
            <h2>Explore More</h2>
          </div>
          <div className="explore_d-grid">
            <div className="explore-card">
              <img src="./carnf12.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnf12.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnft2.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnft6.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnft8.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NFTCard;
