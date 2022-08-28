// import { useState, useEffect } from "react";

// function getWindowDimensions() {
//     const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
//     return {
//         windowWidth,
//         windowHeight,
//     };
// }

// export default function useWindowDimensions() {

//     const [windowDimensions, setWindowDimensions] = useState(
//         getWindowDimensions()
//     );
//     useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//         }

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return windowDimensions;
// }

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollTop() {

//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     },[pathname]);

//     return null;
// };

// import { useState, useCallback, useEffect } from "react";

// export default function useResize(myRef) {
//     const [elWidth, setElWidth] = useState(0);
//     const [elHeight, setElHeight] = useState(0);

//     const handleResize = useCallback(() => {
//         setElWidth(myRef.current.offsetWidth);
//         setElHeight(myRef.current.offsetHeight);
//     }, [myRef]);

//     useEffect(() => {
//         window.addEventListener("load", handleResize);
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("load", handleResize);
//             window.removeEventListener("resize", handleResize);
//         };
//     }, [myRef, handleResize]);

//     return { elWidth, elHeight };
// }
