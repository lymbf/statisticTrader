import { useEffect,useState, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

export default function useNavigation() {
   
//active menu button / location

    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location.pathname);

    useEffect(()=>{
        setCurrentLocation(location.pathname)
        console.log('pathname: ',location.pathname)
    },[location])
    
//animations concerning menu folding/unfolding

    const arrOfMenuKeys = useRef([]);
    arrOfMenuKeys.current = [];
    const arrOfSpanKeys = useRef([])
    arrOfSpanKeys.current = [];
    const folded = useSelector((state) => state.ui.leftMenu.folded);

    const addToMenuKeys = (el) => {
        if (el && !arrOfMenuKeys.current.includes(el)) {
            arrOfMenuKeys.current.push(el);
        }
    };

    const addToSpanKeys = (el) => {
        if (el && !arrOfSpanKeys.current.includes(el)) {
            arrOfSpanKeys.current.push(el);
        }
    };

    useEffect(() => {
        console.log("arr of menu keys: ", arrOfMenuKeys);
        folded &&
            gsap.set(arrOfMenuKeys.current, {
                y: 20,
                opacity: 0,
            });
    }, []);

    useEffect(() => {
        if (folded) {
            let tl = gsap.timeline();
            tl.to(arrOfMenuKeys.current, {
                y: 20,
                opacity: 0,
                duration: 0.2,
            })

            let tl2 = gsap.timeline();
            tl2.to(arrOfSpanKeys.current, {
                x: 25,
                duration: 0.2,
                delay: 0.2,
            })
        }else{
            let tl = gsap.timeline();
            tl.to(arrOfMenuKeys.current, {
                y: 0,
                opacity: 1,
                duration: 0.2,
                delay: 0.2,
            });

            let tl2 = gsap.timeline();
            tl2.to(arrOfSpanKeys.current, {
                x: 0,
                duration: 0.2,
                delay: 0.2,
            })
        }

  
         
    }, [folded]);

    return { addToMenuKeys, addToSpanKeys, currentLocation };
}
