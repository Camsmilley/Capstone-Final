import React, { useState } from "react";
import "./About.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import img from '../../assets/staff.webp';

const About = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically send the feedback to a server
    // For this example, we'll use localStorage to store the feedback
    const newFeedback = { name, feedback, date: new Date().toISOString() };
    const existingFeedback = JSON.parse(localStorage.getItem("feedback") || "[]");
    localStorage.setItem("feedback", JSON.stringify([...existingFeedback, newFeedback]));

    // Clear the form
    setName("");
    setFeedback("");

   
  };

  return (
    <>
      <Header />
      <div className="aboutPage container">
        <span className="secTitle">
          All About Treks Safari
          <p>Below is what you need to know about us!</p>
        </span>

        <div className="description grid">
          <div className="sigleGrid">
            <h2>About Our Experienced Staff</h2>
            <p>
              At Treks Safari, we take pride in our team of experienced
              professionals who are passionate about delivering exceptional
              Hiking experiences. Our staff members are knowledgeable,
              friendly, and dedicated to ensuring your utmost satisfaction. From
              our skilled drivers to our expert guides, we are here to make your
              hiking adventure truly memorable. Count on our staff to provide
              you with excellent service and personalized attention throughout
              your journey.
            </p>
          </div>

          <div className="sigleGrid">
            <h2>Efficient Time Management</h2>
            <p>
              At Treks Safari, we understand the value of your time and strive
              to make the most of every moment you spend with us. We
              meticulously plan and organize our hiking to ensure a
              seamless and efficient experience. From timely pickups to
              well-structured itineraries, we aim to optimize your time and
              provide you with a hassle-free adventure. Trust us to manage your
              time effectively, allowing you to fully immerse yourself in the
              beauty and activities of the Mountain.
            </p>
          </div>

          <div className="sigleGrid">
            <h2>About Trekksafari Family</h2>
            <p>
            We treat our adventurers like family, prioritizing their safety and satisfaction, and we 
            can't wait for you to join our community.
            </p>
          </div>
          <div className="sigleGrid">
            <h2>Discover Trekksafari With Us</h2>
            <p>
            At Trekksafari, we are your personal guides to the best hiking spots in the Philippines, 
            ensuring safety and enjoyment for every adventure.
            </p>
          </div>

          <div className="sigleGrid">
            <h2>Commitment to Health and Safety</h2>
            <p>
              At Treks Safari, we are committed to providing you with a hiking 
              experience that is not only exciting but also safe. We
              adhere to stringent health and safety protocols to ensure your
              well-being throughout your journey. Our activities are conducted with a focus on
              minimizing risks. Rest assured that we prioritize your safety at
              every step, allowing you to fully enjoy your Hiking adventure with
              peace of mind.
            </p>
          </div>

          <div className="sigleGrid">
            <h2>Effective Communication and Support</h2>
            <p>
              Clear and effective communication is the cornerstone of our
              service at Treks Safari. We understand the importance of being
              available to address your queries, provide assistance, and ensure
              a seamless experience. Our dedicated customer support team is
              always ready to answer your questions, offer guidance, and
              accommodate any special requests you may have. Count on us to be
              responsive, reliable, and committed to your satisfaction.
            </p>
          </div>
        </div>

        <div className="reviewSection section">
        <span className="secTitle">
          Leave us a feedback!
          <p>We love to hear from you all!</p>
        </span>

        <div className="formDiv">
        <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <label htmlFor="name">Reviewer Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="inputDiv">
                <label htmlFor="feedback">Feedback</label>
                <textarea 
                  name="feedback" 
                  id="feedback" 
                  placeholder="Write feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Submit Feedback
              </button>
            </form>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;