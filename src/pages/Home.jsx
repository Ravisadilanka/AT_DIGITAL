import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import heroImg from "../assets/hero.jpeg";
import desktopImg from "../assets/image01.png";
import searchImg from "../assets/image02.png";

const Home = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      id: 2,
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      id: 3,
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Container Section */}
      <div className="flex-grow items-center justify-center">
        {/* Hero Image Section */}
        <div className="relative">
          <img src={heroImg} alt="Hero Image" />
          <div className="absolute flex flex-col items-start p-10 gap-5 w-[630px] h-[320px] left-[80px] bottom-[40px] bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79]">
            <h1 className="text-white text-[48px] font-bold leading-none">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h1>
            <Button title="Get free consultation" />
          </div>
        </div>

        <div className="px-[94px] py-[47px] flex flex-col gap-[47px]">
          {/* Body Part 01 */}
          <div className="flex items-center justify-center gap-[108px]">
            <img src={desktopImg} alt="Desktop Image" className="w-[414px]" />
            <div className="flex flex-col gap-3 w-[542px]">
              <h1 className="text-[27px] font-[600] text-primary_color">
                Web & Mobile App Development
              </h1>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <div className="w-[129px]">
                <Button title="Learn More" />
              </div>
            </div>
          </div>

          {/* Body Part 02 */}
          <div className="flex items-center justify-center gap-[108px]">
            <div className="flex flex-col gap-3 w-[542px]">
              <h1 className="text-[27px] font-[600] text-primary_color">
                Digital Strategy Consulting
              </h1>
              <p>
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <div className="w-[129px]">
                <Button title="Learn More" />
              </div>
            </div>
            <img src={searchImg} alt="Search Image" className="w-[414px]" />
          </div>

          {/* FAQ */}
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-[27px] text-primary_color font-Poppins font-[600]">
              Frequently asked questions
            </h1>
            {faqData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col w-[846px] bg-[#FAF8FF] p-6 rounded-[7px] gap-6"
              >
                <div className="flex justify-between items-center">
                  <h2
                    className={
                      openFAQ === data.id
                        ? "text-[22px] font-[500] text-primary_color"
                        : "text-[22px] font-[500]"
                    }
                  >
                    {data.question}
                  </h2>
                  <button
                    className="text-[28px] font-[500]"
                    onClick={() =>
                      setOpenFAQ(openFAQ === data.id ? null : data.id)
                    }
                  >
                    {openFAQ === data.id ? "-" : "+"}
                  </button>
                </div>
                <p
                  className={
                    openFAQ === data.id
                      ? "text-[18px] text-[#6F6C90] font-[400]"
                      : "hidden"
                  }
                >
                  {data.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
