import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";

export default class BaiTapVeNhaBuoiMot extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <Banner />
          </div>
          <div className="col-12 p-0">
            <Item />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
