// import React, { useState, useEffect, useRef } from 'react';
// import './Carousel.scss';

// const Carousel = () => {
//   const images = useRef([
//     {
//       src: 'src/assets/office.png',
//     },
//     {
//       src: 'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black',
//     },
//     {
//       src: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white',
//     },
//   ]);

//   const [current, setCurrent] = useState(0);
//   const [transition, setTransition] = useState({
//     marginLeft: `-${current}00%`,
//   });
//   const imgSize = useRef(images.current.length);

//   const moveSlide = (i) => {
//     let nextSlideIndex = current + i;

//     if (nextSlideIndex < 0) nextSlideIndex = imgSize.current - 1;
//     else if (nextSlideIndex >= imgSize.current) nextSlideIndex = 0;

//     setCurrent(nextSlideIndex);
//   };
//   useEffect(() => {
//     setTransition({ marginLeft: `-${current}00%` });
//   }, [current]);

//   return (
//     <div className="container">
//       <div className="slide">
//         <div
//           className="btn"
//           onClick={() => {
//             moveSlide(-1);
//           }}
//         >
//           &lt;
//         </div>
//         <div className="window">
//           <div className="flexbox" style={transition}>
//             {images.current.map((img, i) => (
//               <div
//                 key={i}
//                 className="img"
//                 style={{ backgroundImage: `url(${img.src})` }}
//               ></div>
//             ))}
//           </div>
//         </div>
//         <div
//           className="btn"
//           onClick={() => {
//             moveSlide(1);
//           }}
//         >
//           &gt;
//         </div>
//       </div>
//       {/* <div className="position">
//         {images.current.map((x, i) => (
//           <div key={i} className={i === current ? 'dot current' : 'dot'}></div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default Carousel;
