import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./ScrollArrow.css";

gsap.registerPlugin(ScrollToPlugin);

const Arrow = ({ sectionsSelector = "section" }) => {
    const arrowRef = useRef(null);
    const [sections, setSections] = useState([]);
    const [hasClicked, setHasClicked] = useState(false);

    useEffect(() => {
        // Grab all sections when component mounts
        const secs = Array.from(document.querySelectorAll(sectionsSelector));
        setSections(secs);
    }, [sectionsSelector]);

    const smoothScroll = (target) => {
        if (!target) return;
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: target.offsetTop - 60, autoKill: false },
            ease: "power2.inOut"
        });
    };

    const handleClick = () => {
        if (!arrowRef.current || sections.length === 0) return;

        const arrow = arrowRef.current;

        // Click Feedback Animation: Move entire button down via margin to avoid transform conflicts
        gsap.to(arrow, {
            marginTop: "150px",
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(arrow, { clearProps: "marginTop" });
            }
        });

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
                arrow.style.top = "85%";
            }, 100);

            // Add clicked class for rotation animation ONLY on first click
            arrow.classList.add("clicked");

            // Disable bounce animation after first click
            setHasClicked(true);

            // Remove clicked class after animation finishes so it doesn't stay rotated (optional, or keep it if desired)
            setTimeout(() => {
                arrow.classList.remove("clicked");
            }, 1200);
        }

        // Add delay before scrolling for smoother feel
        setTimeout(() => {
            const currentScroll = window.scrollY;
            // Find the next section that is below the current viewport
            const nextSection = sections.find(sec => {
                // Use a small buffer to ensure we don't pick the current section if slightly scrolled
                return (sec.offsetTop - 60) > (currentScroll + 10);
            });

            if (nextSection) {
                smoothScroll(nextSection);
                // Rotate if it's the last section
                if (nextSection === sections[sections.length - 1]) {
                    arrow.classList.add("rotate");
                } else {
                    arrow.classList.remove("rotate");
                }
            } else {
                // No remaining sections below -> Reset to top
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: 0, autoKill: false },
                    ease: "power2.inOut"
                });
                arrow.classList.remove("rotate");
            }
        }, 300);
    };

    return (
        <div id="scroll" ref={arrowRef} onClick={handleClick}>
            <span className={hasClicked ? "" : "arrow-bounce"}>↓</span>
        </div>
    );
};

export default Arrow;
