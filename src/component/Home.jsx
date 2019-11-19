import React, { Component } from 'react';



class Home extends Component
{
    render()
    {
        return (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img src={require('../gambar/desktop.jpg')} alt="" className="img-fluid rounded slide" />
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger danger" role="alert">
                                <p className="text-white text-center">
                                    A Simple success alert-check it out!
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container slide">
                    <div className="row">
                        <div className="col-md-8">
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
                        <div className="col-md-4">
                            <img src={require('../gambar/img.jpg')} alt="" className="img-cluid rounded slide" />
                            <img src={require('../gambar/img2.jpg')} alt="" className="img-cluid rounded slide" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;