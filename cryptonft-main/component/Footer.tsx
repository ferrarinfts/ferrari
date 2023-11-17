import { Router, useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
  const router = useRouter();
  return (
    <section className="footer">
        <div className="container">
          <div className="inner_footer">
            <div
              className="big_btn_row aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <span>
                <a href="#">Terms and Conditions</a>
              </span>
              <span>
                <a href="#">Privacy Policy</a>
              </span>
              <span>
                <a href="#">Cookies Policy</a>
              </span>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex">
                  <div className="de-flex-col">
                    <a onClick={() =>router.push("/")}>
                      <img alt=""  style={{cursor:"pointer"}} className="img-logo" src="./logo.svg" />
                    </a>
                  </div>
                  <div className="de-flex-col">
                    <div className="social-icons">
                      <a href="#">
                        <i className="bi bi-facebook bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-pinterest bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-rss bi-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Footer