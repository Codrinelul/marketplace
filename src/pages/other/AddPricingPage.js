import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import BannerTwo from "../../wrappers/banner/BannerTwo";
import TabProductTwo from "../../wrappers/product/TabProductTwo";
import CountDownOne from "../../wrappers/countdown/CountDownOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";

const AddPricingPage = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Profile</title>
                <meta
                    name="description"
                    content=""
                />
            </MetaTags>
            <LayoutOne headerTop="visible">
                <section class="container">
                    <div class="white">
                        <div class="block">

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <ul class="pricing p-green">
                                    <li>

                                        <big>Start</big>
                                    </li>
                                    <li>Responsive Design</li>
                                    <li>Color Customization</li>
                                    <li>HTML5 & CSS3</li>
                                    <li>Styled elements</li>
                                    <li>
                                        <h3>$199</h3>
                                        <span>per month</span>
                                    </li>
                                    <li>
                                        <button>Join Now</button>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <ul class="pricing p-yel">
                                    <li>

                                        <big>Good</big>
                                    </li>
                                    <li>Responsive Design</li>
                                    <li>Color Customization</li>
                                    <li>HTML5 & CSS3</li>
                                    <li>Styled elements</li>
                                    <li>
                                        <h3>$299</h3>
                                        <span>per month</span>
                                    </li>
                                    <li>
                                        <button>Join Now</button>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <ul class="pricing p-red">
                                    <li>
                                        <big>Good</big>
                                    </li>
                                    <li>Responsive Design</li>
                                    <li>Color Customization</li>
                                    <li>HTML5 & CSS3</li>
                                    <li>Styled elements</li>
                                    <li>
                                        <h3>$399</h3>
                                        <span>per month</span>
                                    </li>
                                    <li>
                                        <button>Join Now</button>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <ul class="pricing p-blue">
                                    <li>

                                        <big>Vip</big>
                                    </li>
                                    <li>Responsive Design</li>
                                    <li>Color Customization</li>
                                    <li>HTML5 & CSS3</li>
                                    <li>Styled elements</li>
                                    <li>
                                        <h3>$799</h3>
                                        <span>per month</span>
                                    </li>
                                    <li>
                                        <button>Join Now</button>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </section>
            </LayoutOne>
        </Fragment>
    );
};

export default AddPricingPage;
