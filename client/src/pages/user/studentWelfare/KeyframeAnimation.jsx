import React from "react";
import "./KeyframeAnimation.css";

const KeyframeAnimation = () => {
    return (
        <div className="kfa-app">
            <div className="kfa-title">
                <div className="kfa-title-inner">
                    <div className="kfa-cafe">
                        <div className="kfa-cafe-inner">Alumani</div>
                    </div>
                    <div className="kfa-mozart">
                        <div className="kfa-mozart-inner">Students</div>
                    </div>
                </div>
            </div>

            <div className="kfa-image">
                <img
                    src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
                    alt="Image"
                />
            </div>
        </div>
    );
};

export default KeyframeAnimation;
