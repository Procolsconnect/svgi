import React from 'react';
import './News3.css';

const LuxuryTriplePane = () => {
  return (
    <div className="ltp-wrapper">
      <section className="ltp-triple-pane">
        
        <div className="ltp-pane ltp-pane-left">
          <img 
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg?itok=QTxMln2k" 
            alt="Mercedes S-Class luxury interior"
          />
        </div>

        <div className="ltp-pane ltp-pane-mid">
          <div className="ltp-pane-content">
            <div className="ltp-pane-title">
              It isn't luxury if you have to think about it.
            </div>

            <div className="ltp-pane-text">
              <p>
                Besides the fact that not every chauffeur service operates legally, it's hard to differentiate which of the similar-looking vehicle offerings found on different car service websites are the best.
              </p>
              <p>
                Limo rental companies often focus on volume — and rather than rely on good service to drive sales, they advertise based on the vehicles they have in their fleet. But even the rarest vehicles can vary on upkeep or amenities. And since staff caliber is arguably the most important element of all (but the average limo service doesn't prioritize this at all), there's going to be plenty of uncertainty — no matter which provider you choose.
              </p>
            </div>

            <button className="ltp-pane-btn">
              What Makes Us Different
            </button>
          </div>
        </div>

        <div className="ltp-pane ltp-pane-right">
          <img 
            src="https://i.pinimg.com/564x/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg" 
            alt="Luxury Mercedes fleet"
          />
        </div>

      </section>
    </div>
  );
};

export default LuxuryTriplePane;