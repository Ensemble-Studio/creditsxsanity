import { useSpring, animated, config } from 'react-spring';
import { useRef, useState } from "react";
import { ccard, ccardMain } from '../styles/Text.module.css';

const calc = (x, y, rect) => [
     -(y - rect.top - rect.height / 2) / 5,
     (x - rect.left - rect.width / 2) / 5,
     1.4
];
const trans = (x, y, s) =>
     `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


export default function Text({ content }) {
     const ref = useRef(null);
     const [xys, set] = useState([0, 0, 1]);
     const props = useSpring({ xys, config });


     return (

          <div className={ccardMain} ref={ref}>
               <animated.div
                    className={ccard}
                    style={{ transform: props.xys.to(trans) }}
                    onMouseLeave={() => set([0, 0, 1])}
                    onMouseMove={(e) => {
                         const rect = ref.current.getBoundingClientRect();
                         set(calc(e.clientX, e.clientY, rect));
                    }}
               >
                    {content}
               </animated.div>
          </div>)
}