import React, { useEffect, useState, useRef } from 'react'
import "./product.css";

const Product = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    const ref = useRef(null);

    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting){
            setShowAnimation(true);
        }
    };

    const options={
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    
    useEffect(()=>{
        const observer = new IntersectionObserver(toggleAnimation,options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }

        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });

  return (
    <div className={`product-showcase  ${showAnimation?'scale-in-bottom': ""}`}
    ref={ref}
    >
        {showAnimation && (<div className="showcase-wrapper">
            <img src="images/phoneprototype.png" alt="prototype-img" className="showcase-ui showcase-mockup-1 size"/>
            <img src="images/phoneprototype.png" alt="prototype-img" className="showcase-ui showcase-mockup-2 size"/>
            <img src="images/phoneprototype.png" alt="prototype-img" className="showcase-ui showcase-mockup-3 size"/>
            <img src="images/phoneprototype.png" alt="prototype-img" className="showcase-ui showcase-mockup-4 size"/>
            <img src="images/phoneprototype.png" alt="prototype-img" className="showcase-ui showcase-mockup-5 size"/>
            {/* <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png" alt="prototype-img" className="showcase-ui showcase-mockup-2"/>
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png" alt="prototype-img" className="showcase-ui showcase-mockup-3"/>
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png" alt="prototype-img" className="showcase-ui showcase-mockup-4"/>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png" alt="prototype-img" className="showcase-ui showcase-mockup-5"/> */}
        </div>)}    
    </div>
  )
}

export default Product;
