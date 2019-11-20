import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Home extends Component
{
    render()
    {
        return (
            <Router>
                <div className="slider">
                    <div className="container sliderimage">
                        <div className="row">
                            <img src={require('../gambar/desktop.jpg')} alt="" className="img-fluid rounded slide" width="100%" />
                        </div>
                    </div>
                    <div className="container notive">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-danger danger" role="alert">
                                    <p className="text-white text-center">
                                        Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif
                            </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container slide">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="carousel slide" id="carouselExampleIndicator" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require('../gambar/slide1.jpg')} alt="" className="img-fluid d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../gambar/slide2.jpg')} alt="" className="img-fluid d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../gambar/slide3.jpg')} alt="" className="img-fluid d-block w-100" />
                                        </div>
                                        <a href="#carouselExampleIndicators" className="carousel-control-prev" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a href="#carouselExampleIndicators" className="carousel-control-next" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <img src={require('../gambar/img.jpg')} alt="" className="img-cluid rounded slide" />
                                <img src={require('../gambar/img2.jpg')} alt="" className="img-cluid rounded slide" />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <h4>Add-on Unggulan</h4>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={require('../gambar/addon1.jpg')} alt="" className="img-cluid rounded slide" width="300px" />
                                <h5>Hooq</h5>
                                <Link to="" className="text-danger">Lihat</Link>
                            </div>
                            <div className="col-md-3">
                                <img src={require('../gambar/addon2.jpg')} alt="" className="img-cluid rounded slide" width="300px" />
                                <h5>Iflix</h5>
                                <Link to="" className="text-danger">Lihat</Link>
                            </div>
                            <div className="col-md-3">
                                <img src={require('../gambar/addon3.jpg')} alt="" className="img-cluid rounded slide" width="300px" />
                                <h5>EduKids</h5>
                                <Link to="" className="text-danger">Lihat</Link>
                            </div>
                            <div className="col-md-3">
                                <img src={require('../gambar/addon4.jpg')} alt="" className="img-cluid rounded slide" width="300px" />
                                <h5>Catchplay</h5>
                                <Link to="" className="text-danger">Lihat</Link>
                            </div>
                        </div>

                    </div>




                    <div className="container-fluid biru p-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="text-white text-center" >
                                        Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda
                                    </h5>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-3"></div>
                                <div className="col-md-2">
                                    <img src={require('../gambar/b1.png')} alt="" />
                                </div>
                                <div className="col-md-2">
                                    <img src={require('../gambar/b2.png')} alt="" />
                                </div>
                                <div className="col-md-2">
                                    <img src={require('../gambar/b3.png')} alt="" />
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row">


                            </div>
                        </div>
                    </div>
                </div>
            </Router >
        );
    }
}

export default Home;