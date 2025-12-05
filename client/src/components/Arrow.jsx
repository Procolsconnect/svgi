import React, { useEffect, useRef, useState } from "react";
import "./ScrollArrow.css";

const Arrow = ({ sectionsSelector = "section" }) => {
    const arrowRef = useRef(null);
    const [count, setCount] = useState(0);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Grab all sections when component mounts
        const secs = Array.from(document.querySelectorAll(sectionsSelector));
        setSections(secs);
    }, [sectionsSelector]);

    const smoothScroll = (target) => {
        if (!target) return;
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth",
        });
    };

    const handleClick = () => {
        if (!arrowRef.current || sections.length === 0) return;

        let nextCount = count;
        const arrow = arrowRef.current;

        // Only animate position on first click (when still absolute)
        if (arrow.style.position !== "fixed") {
            // Calculate current position before changing to fixed (like HTML version)
            const rect = arrow.getBoundingClientRect();
            const currentTop = rect.top;

            // Set initial fixed position at current location
            arrow.style.position = "fixed";
            arrow.style.top = `${currentTop}px`;
            arrow.style.right = rect.right + "px";
            arrow.style.bottom = "auto";
            arrow.style.marginRight = "0";

            // Force reflow to ensure position change is applied
            void arrow.offsetWidth;

            // Animate to bottom-right corner (slower for smoother effect)
            setTimeout(() => {
                arrow.style.right = "5%";
                arrow.style.top = "90%";
            }, 100);
        }

        // Add clicked class for rotation animation
        arrow.classList.add("clicked");

        // Add delay before scrolling for smoother feel
        setTimeout(() => {
            if (nextCount >= sections.length) {
                // Reset to beginning - arrow stays fixed at bottom-right
                nextCount = 0;
                window.scrollTo({ top: 0, behavior: "smooth" });
                arrow.classList.remove("rotate");
            } else {
                const targetSection = sections[nextCount];
                if (nextCount === sections.length - 1) arrow.classList.add("rotate");
                smoothScroll(targetSection);
                nextCount++;
            }
            setCount(nextCount);
        }, 300);

        // Reset clicked animation (slower to match transition)
        setTimeout(() => {
            arrow.classList.remove("clicked");
        }, 1200);
    };

    return (
        <div id="scroll" ref={arrowRef} onClick={handleClick}>
            <span className="arrow-bounce">↓</span>
        </div>
    );
};

export default Arrow;
