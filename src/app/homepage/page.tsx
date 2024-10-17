"use client"
import Image from "next/image";
import { Icon } from '@iconify/react';


export default function Homepage() {
    return (
        <>
            <section className="home-page ">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-image">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-9 col-8 mx-auto mt-4">
                                        <div className="d-flex flex-column-reverse flex-md-row d-md-flex justify-content-md-between  mb-2">
                                            <div className="mb-4 mb-md-0">
                                                <Image
                                                    src="/assets/images/logo.png"
                                                    alt="hero img"
                                                    className="img-fluid logo"
                                                    width={200}
                                                    height={160}
                                                    priority
                                                />
                                            </div>
                                            <div className="text-center mb-5 mb-md-0">
                                                <p className="text-primary fs-14 mb-0">أوقات العمل الأحد إلى الخميس من 7:30 صباحاً حتى 2:30 ظهراً</p>
                                                <p className="text-primary fs-12 mb-0">Working times from Sunday to Thursday 7:30 AM until 2:30 PM</p>
                                            </div>
                                        </div>
                                        <div className="text-center position-relative">
                                            <h2 className="text-white mb-3">قريباً<br /> المنصة الذكية لبلدية كلباء</h2>
                                            <div className="border-bottom bb"></div>
                                        </div>
                                        <h5 className="text-light text-center mt-4 mb-0">Soon <br /> Smart Kalba Municipality Platform</h5>
                                        <div className="cards-section d-none d-md-block">
                                            <div className="d-flex">
                                                <div>
                                                    <div className="card card1">
                                                        <div className="card-body">
                                                            <p className="text-light mb-0">تواصل معنا</p>
                                                            <p className="text-light mb-2">Call</p>
                                                            <div className="text-end">
                                                                <Icon icon="akar-icons:phone" className="text-primary fs-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card card2 active">
                                                        <div className="card-body">
                                                            <p className="text-secondary mb-0">راسلنا</p>
                                                            <p className="text-secondary mb-2">Email</p>
                                                            <div className="text-end">
                                                                <Icon icon="weui:email-outlined" className="text-secondary fs-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card card1">
                                                        <div className="card-body">
                                                            <p className="text-light mb-0">تفضل بزيارتنا</p>
                                                            <p className="text-light mb-2">Visit</p>
                                                            <div className="text-end">
                                                                <Icon icon="ep:location" className="text-primary fs-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card card1">
                                                        <div className="card-body">
                                                            <p className="text-light mb-0">تابعنا</p>
                                                            <p className="text-light mb-2">Follow</p>
                                                            <div className="text-end">
                                                                <Icon icon="uim:instagram" className="text-primary fs-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="cards-mobile-section d-block d-md-none">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6 px-0">
                                            <div className="card card1">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                        <div>
                                                            <p className="text-light mb-0 fs-4 fs-mobile">تواصل معنا</p>
                                                            <p className="text-light mb-0 fs-5 fs-mobile">Call</p>
                                                        </div>
                                                        <div>
                                                            <Icon icon="akar-icons:phone" className="text-primary icon-fs" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 px-0">
                                            <div className="card card1">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                        <div>
                                                            <p className="text-light mb-0 fs-4 fs-mobile">راسلنا</p>
                                                            <p className="text-light mb-0 fs-5 fs-mobile">Email</p>
                                                        </div>
                                                        <div>
                                                        <Icon icon="weui:email-outlined" className="text-primary icon-fs me-2" /> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 px-0">
                                            <div className="card card1">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                        <div>
                                                            <p className="text-light mb-0 fs-4 fs-mobile">تفضل بزيارتنا</p>
                                                            <p className="text-light mb-0 fs-5 fs-mobile">Visit</p>
                                                        </div>
                                                        <div>
                                                        <Icon icon="ep:location" className="text-primary icon-fs me-2" />
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 px-0">
                                            <div className="card card1">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                        <div>
                                                            <p className="text-light mb-0 fs-4 fs-mobile">تابعنا</p>
                                                            <p className="text-light mb-0 fs-5 fs-mobile">Follow</p>
                                                        </div>
                                                        <div>
                                                        <Icon icon="uim:instagram" className="text-primary icon-fs me-2" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
