import React, { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "framer-motion";
import tw_A from '../assets/posts/tw_A.png'
import tw_3 from '../assets/posts/tw_3.png'
import li from '../assets/posts/li.png'
import li_2 from '../assets/posts/li_2.png'

const testimonials = [
  // {
  //   platform: "linkedin",
  //   image: li_2,
  //   icon: <i className="fa-brands fa-linkedin text-white text-lg"></i>,
  //   link: "https://www.linkedin.com/in/pooja-pro/"
  // },
  {
    platform: "twitter",
    image: tw_A,
    icon: <i className="fa-brands fa-x-twitter text-white text-lg"></i>,
    link: "https://github.com/poojayadavcoder"
  },
  {
    platform: "linkedin",
    image: li,
    icon: <i className="fa-brands fa-linkedin text-white text-lg"></i>,
    link: "https://www.linkedin.com/in/pooja-pro/"
  },
  {
    platform: "twitter",
    image: tw_3,
    icon: <i className="fa-brands fa-x-twitter text-white text-lg"></i>,
    link: "https://github.com/poojayadavcoder"
  }
];

// duplicate items for seamless loop
const items = [...testimonials, ...testimonials, ...testimonials];

const CommunityActivity = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const isUpdating = useRef(false);

  // SPEED (pixels per second)
  const speed = 40;

  useAnimationFrame((t, delta) => {
    if (isUpdating.current || !containerRef.current || !itemRef.current) return;

    const fullWidth = (itemRef.current.offsetWidth + 24) * testimonials.length;
    
    let moveBy = (speed * delta) / 1000;
    let currentX = x.get() - moveBy;

    // Reset loop seamlessly
    if (Math.abs(currentX) >= fullWidth) {
      currentX = 0;
    }

    x.set(currentX);

    // Update active dot based on current scroll position
    const itemWidth = itemRef.current.offsetWidth + 24;
    const newActiveDot = Math.round(Math.abs(currentX) / itemWidth) % testimonials.length;
    if (newActiveDot !== activeDot) {
      setActiveDot(newActiveDot);
    }
  });

  const handleDotClick = (index) => {
    if (!itemRef.current || isUpdating.current) return;

    isUpdating.current = true;
    const itemWidth = itemRef.current.offsetWidth + 24;
    const targetX = -(index * itemWidth);

    animate(x, targetX, {
      type: "spring",
      stiffness: 100,
      damping: 20,
      onComplete: () => {
        isUpdating.current = false;
        setActiveDot(index);
      },
    });
  };

  return (
    <div className="py-20 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-[28px] sm:text-4xl font-bold logo textColor">
            Community Impact
          </h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-visible">
            <motion.div
              ref={containerRef}
              className="flex gap-6 w-max"
              style={{ x }}
            >
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  ref={i === 0 ? itemRef : null}
                  whileHover={{ scale: 1.02 }}
                  className="relative group shrink-0 w-[250px] sm:w-[380px] rounded-[2rem] overflow-hidden border bg-[#0a0a0a] shadow-2xl transition-all duration-300 border-orange-500"
                >
                  {/* <div className="absolute top-3 right-5 bg-orange-400 w-[100px] h-[100px]"></div> */}
                   <div className="absolute top-[-10%] right-[-10%] w-[100px] h-[100px] bg-black rounded-full blur-[50px]"></div>
                   <div className="absolute bottom-[10%] left-[-5%] w-[100px] h-[70px] bg-orange-600 rounded-full blur-[50px]"></div>
                   <div className="absolute top-[10%] right-[10%] w-[80px] h-[70px] bg-orange-600 rounded-full blur-[50px]"></div>
                  {/* Platform Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10 w-10 h-10 flex justify-center items-center  rounded-full shadow-xl bg-black group-hover:border-orange-500 transition-all duration-300">
                    {item.icon}
                  </div>


                  {/* Post Image */}
                  <div className="h-full w-full">
                    <img
                      src={item.image}
                      alt={item.platform}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Bottom Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${
                  i === activeDot ? "w-8 bg-orange-600" : "w-2 bg-gray-800 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityActivity;