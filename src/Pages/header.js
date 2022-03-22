import React from 'react';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';


export function Header(){
    return(
        <header className="bg-sla text-white">
                <nav className=''>
                    <div className="flex flex-row bg-transparent">
                         <Link className="bg-sla basis-1/3 hover:text-black hover:bg-blue-100 text-left text-2xl px-6 py-3" to="/">
                             <FaHome className='inline transition duration-500 ease-in-out text-slate-100 hover:text-black hover:-translate-y-1 hover:scale-110'/></Link>
                        <div className="flex flex-row-reverse basis-2/3">
                            <NavButton route="/about" name="About" />
                            <NavButton route="/projects" name="Projects" />
                            <NavButton route="/resume" name="Resume" />
                            <NavButton route="/contact" name="Contact" />
                        </div>
                    </div>
                </nav>
        </header>
    );
}

export function NavButton(props) {
    return(
        <Link className=" transition duration-500 ease-in-out bg-sla basis-1/8 py-3 px-3 hover:text-black hover:shadow-lg hover:bg-slacomp hover:-translate-y-1 hover:scale-105" to={props.route}>{props.name}</Link>
    );
}