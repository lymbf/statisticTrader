import { useEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

export default function useUser(arrowRef, nameRef, userRef) {
    const folded = useSelector((state) => state.ui.leftMenu.folded);

    //animate arrow/user on fold/unfold
    useEffect(() => {
        if (folded) {
            let tl = gsap.timeline();
            gsap.to(arrowRef.current, { rotation: -180, duration: 0.2 });
            tl.to(nameRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.2,
            }).to(nameRef.current, {scale: 0});
            gsap.to(userRef.current,{ width: 50, x:-10})
        } else {
            let tl = gsap.timeline();
            gsap.to(arrowRef.current, { rotation: 0, duration: 0.2});
            tl.to(nameRef.current, {scale: 1, duration: 0}).to(nameRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.2,
                delay: 0.2
            });
            gsap.to(userRef.current,{ width: 'auto', x:0})
        }
    }, [folded]);

    useEffect(() => {
        folded &&
            gsap.set(nameRef.current, {
                opacity: 0,
                y: 20,
            });
    }, []);
}
