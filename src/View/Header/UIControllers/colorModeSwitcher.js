import { useEffect } from 'react';
import {gsap} from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../../Application/Redux/Reducers/config';

export default function useColorModeSwitcher(ref) {
    const dispatch = useDispatch();
    const darkMode = useSelector(state=>state.config.darkMode)

    const switchToDark = (e)=>{
        if(!darkMode){
            dispatch(setDarkMode(true))
            gsap.to(ref.current, {
                x: 0,
                duration: 0.2
            })
        }
    }
    const switchToLight = (e)=>{
        if(darkMode){
            dispatch(setDarkMode(false))
            gsap.to(ref.current, {
                x: ref.current.clientWidth,
                duration: 0.2
            })
        }
    }

    return {switchToDark, switchToLight, darkMode}
}
