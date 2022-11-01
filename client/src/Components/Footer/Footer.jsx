import React from "react";

export default function Footer() {
  return (
    <section class="rc-footer-bottom">
      <div class="site-server-box" data-site="site" data-spm="20">
        <div
          style={{ display: "flex", flexDirection: "row" }}
          class="container"
        >
          <div class="site-item">
            <i class="icon i-great">&nbsp;</i>
            <h3>Great value</h3>
            <p>We offer competitive prices on over 100 million items.</p>
          </div>
          <div class="site-item">
            <i class="icon i-delivery">&nbsp;</i>
            <h3>Worldwide shopping</h3>
            <p>
              We ship to over 200 countries and regions, and our site comes in
              12 languages.
            </p>
          </div>
          <div class="site-item">
            <i class="icon i-payment">&nbsp;</i>
            <h3>Safe payment</h3>
            <p>Pay with the world’s most popular and secure payment methods.</p>
          </div>
          <div class="site-item">
            <i class="icon i-confidence">&nbsp;</i>
            <h3>Shop with confidence</h3>
            <p>
              Our Buyer Protection policy covers your entire purchase journey.
            </p>
          </div>
          <div class="site-item">
            <i class="icon i-help">&nbsp;</i>
            <h3>Help center</h3>
            <p>Round-the-clock assistance for a smooth shopping experience.</p>
          </div>
          <div class="site-item">
            <i class="icon i-shop">&nbsp;</i>
            <h3>Shop better</h3>
            <p>
              <a
                rel="nofollow"
                href="//sale.aliexpress.com/download_app_guide.htm"
              >
                Download the app
              </a>{" "}
              for mobile-only features such as image search and discount games.
            </p>
          </div>
        </div>
      </div>


      <div
        style={{
          color: "white",
          background: "#C0C0C0",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "50px",
        }}
        class="footer-copywrite"
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
            }}
            href="https://github.com/TyamackovM"
          >
            TyamackovM
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
            }}
            href="https://github.com/DanilaTru"
          >
            DanilaTru
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
            }}
            href="https://github.com/StepanMogilyov"
          >
            StepanMogilyov
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
            }}
            href="https://github.com/Aleks2580"
          >
            Aleks2580
          </a>
        </div>
      </div>
      <div
        style={{ color: "white", background: "black", textAlign: "center" }}
        class="footer-copywrite"
      >
        <div style={{ height: "25px" }} class="container">
          ©️2022 Ali-Elbrus. All rights reserved.
        </div>
      </div>
    </section>
  );
}
