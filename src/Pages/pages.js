import React from 'react';
import {useLocation, Link} from 'react-router-dom';

export function Home(){
    return(
        <>
            <Header />
            <main className="relative min-h-fit w-32">
                <h1>Templating</h1>
            </main>
            <Footer />
        </>
    );
}

export function About() {
    return(
        <>
            <Header />
            <main className="">
                <h1>

                </h1>
            </main>
            <Footer />
        </>
    );

}

export function Projects(){
    return(
        <>
            <Header />
            <main className="">
                <h1>

                </h1>
            </main>
            <Footer />
        </>
    );
}

export function Resume(){
    return(
        <>
            <Header />
            <main className="">
                <h1>

                </h1>
            </main>
            <Footer />
        </>
    );

}

export function Contact(){
    return(
        <>
            <Header />
            <main className="">
                <h1>

                </h1>
            </main>
            <Footer />
        </>
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
        <header className="bg-slate-800">
            <nav className="shadow-md ">
                <ul className="nav navbar bg-transparent">
                    <li>                     
                        <Link className="btn navbar-brand" to="/">Gage</Link>
                    </li>

                    <li>
                        <Link className="btn" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="btn" to="/projects">Projects </Link>
                    </li>
                    <li>
                        <Link className="btn" to="/resume">Resume</Link>                        
                    </li>
                    <li>
                        <Link className="btn" to="/contact">Contact</Link>   
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function Footer(){
    return(
        <footer className="absolute w-full inset-x-0 bottom-0
         bg-slate-800 h-32">
            <p>
                E
            </p>
            
        </footer>
    );
}