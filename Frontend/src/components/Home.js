import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-sm  ">
        <div className="row ">
          <div className="content_box col  ">
            <h1 className="heading">
              <span className="edu_clr">Education</span>{" "}
              <span className="text-light">and</span>{" "}
              <span className="care_clr">Care</span> <br />
              <span className="text-light">for Your Kids</span>
            </h1>
            <p className="pt-4 pb-4 fs-5 text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos
              aliquid similique, ipsa quidem dicta. <br /> Et ad, earum fugiat
              consectetur ea ipsa quod vero provident inventore, iste eaque
              alias. Doloribus?
            </p>
            <button className="btn btn-success btn-lg">Contact us </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
