import React from 'react';
import './TestimonialPage.css'; // Create this CSS file in the same directory

function TestimonialPage() {
    return (
        <div className="testimonial-container">
            <h1 className="testimonial-heading">TESTIMONIALS</h1>
            <img
                className="testimonial-image"
                src="https://www.webfx.com/wp-content/uploads/2023/08/147_testimonial_examples.png" // Replace with your image URL
                alt="Testimonial"
            />
            <div className="testimonial-content">
                {/* Add your testimonials here */}
                <div className="testimonial">
                    <p>Testimonial 1:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>- John Doe</p>
                </div>
                <div className="testimonial">
                    <p>Testimonial 2:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>- Jane Doe</p>
                </div>
                <div className="testimonial">
                    <p>Testimonial 3:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>- Luie Harrison</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialPage;
