import React,{useEffect} from 'react';
import './css/Porfolio.css';
import Thumbnail from "../components/Thumbnail";
import {useSpring, animated} from 'react-spring';

export default function Portfolio() {
    useEffect(() => {
        document.title = `Portfolio - Łukasz Czerniawski`;
      });
    const animationProps = useSpring({config: {duration: 1500}, opacity: 1, from: {opacity: 0}})
    return(
        <animated.div style={animationProps} className="contentPortfolio">
            <h1 className="title-main">Portfolio</h1>
            <div className="containerPortfolio">
                <Thumbnail id={1} image={process.env.PUBLIC_URL + '/studyOnline-thumbnail.png'} caption="E-learning platform"/>
                <Thumbnail id={2} image={process.env.PUBLIC_URL + '/kantorOnline-thumbnail.png'} caption="Online currency exchange"/>
            </div>
        </animated.div>
    )
};
