import React from 'react';
import {SocialFollow} from './social';
import {Link} from 'react-router-dom';

export function Footer(){
    return(
        <footer className="bg-sla">
            <div className="flex flex-row p-6 bg-inherit">
                <div className='basis-1/2'>
                    <h1 className=' text-left text-4xl'><strong>Gage Gabaldon</strong></h1>
                    <h2 className='text-left pt-3'>Computer Scientist and Software Engineer</h2>
                </div>
                <div className='flex flex-row-reverse basis-1/2'>
                    <div className='basis-1/2'>
                        <h3 text="text-2xl">
                            Contact Me
                        </h3>
                        <SocialFollow className=""/>
                    </div>
                    <div className='basis-1/2'>
                        <h3>
                            Other Pages
                        </h3>
                        <ul className=''>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-1 text-sm'>
                Created by Gage Gabaldon and continously update since 2022.  
            </div>  
        </footer>
    );
}