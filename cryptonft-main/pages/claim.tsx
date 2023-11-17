import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Claim = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <section className="claim">
        <div className="container centered-container-claim">
          <div className="row text-center claim_text">
          <h1 className="lg-font text-green">Claim not available now </h1>
          <p> <Link href="/">Learn more</Link></p>
       
        <h3 className="">Visit telegram for more information</h3>
        <Link href="https://www.telegram.org" target="_blank" >
        <i className="bi bi-telegram fnts-2"></i>
        </Link>
          </div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
};

export default Claim;
