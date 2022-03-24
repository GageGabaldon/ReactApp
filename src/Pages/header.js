import React from 'react';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';


export function Header(){
    return(
        // setting bg-transparent here
        <header className="bg-transparent text-white">
                <nav className=''>
                    <div className="flex flex-row">
                        <div className='basis-1/3 text-left py-3 px-4'>
                         <Link className="basis-1/3 hover:text-black hover:bg-blue-100" to="/">
                             <FaHome size={30} className='inline transition duration-500 ease-in-out text-slate-100 hover:text-slacomp hover:-translate-y-1 hover:scale-110'/></Link>
                        </div>
                        <div className="flex flex-row-reverse basis-2/3">
                            <NavButton route="/about" name="About" />
                            <NavButton route="/projects" name="Career" />
                            <NavButton route="/resume" name="Resume" />
                        </div>
                    </div>
                </nav>
        </header>
    );
}

export function NavButton(props) {
    return(
        <Link className=" transition duration-500 ease-in-out basis-1/8 my-1 mx-1 py-3 px-3 hover:text-black hover:shadow-lg hover:bg-slacomp hover:-translate-y-0 hover:scale-105 rounded-xl hover:no-underline" to={props.route}>{props.name}</Link>
    );
}