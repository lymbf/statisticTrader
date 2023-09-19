import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComponentLoaded } from "../../../Application/Redux/Reducers/ui";
import { gsap } from "gsap";

export default function useLeftMenu(ref) {
   
    const dispatch = useDispatch();
    const folded = useSelector(state=>state.ui.leftMenu.folded)
    useEffect(() => {
        folded && gsap.set(ref.current, {
            width: 200
        })
        dispatch(setComponentLoaded("leftMenu"));
    }, []);

    useEffect(()=>{
        if(folded){
            let tl = gsap.timeline();
            tl.to(ref.current, {
                width:450, duration: 0.2
            }).to(ref.current, {width:140, duration: 0.2})
        
        }else{
            let tl = gsap.timeline();
            tl.to(ref.current, {
                width:110, duration: 0.2
            }).to(ref.current, {width:400, duration: 0.2})
        }
    },[folded])
   
    return {};
}
