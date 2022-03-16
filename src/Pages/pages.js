import React from 'react';
import {useLocation, Link} from 'react-router-dom';

export function Home(){
    return(
        <h1 className="underline">Yoo</h1>
    );
}

export function Error(){
    let location = useLocation();
    return(
        <main>
            <h1>
                Error: {location.pathname}
            </h1>
        </main>
    );

}

function Header(){
    return(
        <header>
            <h1>
                Soon to be Image
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Yoo </Link>
                        <Link to="/about">Yoo </Link>
                        <Link to="/projects">Yoo </Link>
                        <Link to="/resume">Yoo </Link>                        
                        <Link to="/resume">Yoo </Link>                        
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

function Footer(){
    return(
        <footer>

        </footer>
    );
}