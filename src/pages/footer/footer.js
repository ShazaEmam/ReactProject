import React from 'react';


const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fa fa-facebook" ></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fa fa-twitter" ></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fa fa-google" ></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fa fa-instagram" ></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fa fa-linkedin "></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fa fa-github" ></i>
                        </a>

                    </section>

                </div>



                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"> Watch<span className="text-warning fw-bold">IT</span>.com</a>
                </div>

            </footer>
        </>
    );
};
export default Footer;