import React from "react";
import "./navigation.css";
import { Link} from "react-router-dom";
import useNavigation from "./UIController/navigation";

export default function Navigation() {
    const data = [{name: 'home', link: '/', icon: 'house'},
        { name: "trade analizer", link: "/trade-analizer", icon: "monitoring" },
        { name: "setup testet", link: "/setup-tester", icon: "earthquake" },
        {name: 'journal', link: '/journal', icon: 'menu_book'},
        {name: 'galleries', link: '/galleries', icon: 'gallery_thumbnail'},
        {name: 'personal calendar', link: '/personal-calendar', icon: 'calendar_month'}
    ];


    const {addToMenuKeys, addToSpanKeys, currentLocation} = useNavigation();
    return (
        <ul className="l-m-nav">
            {data.map((el) => {
                return (
                    <Link to={el.link}>
                        <li className = {currentLocation === `${el.link}` ? 'active-link' : ''}>
                            <span ref = {addToSpanKeys} class="material-symbols-outlined">
                                {el.icon}
                            </span>
                            <div ref = {addToMenuKeys}>{el.name}</div>
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
}
