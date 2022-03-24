import React from 'react';
import {SocialFollow} from './social';
import {Link} from 'react-router-dom';

export function Footer(){
    return(
        <footer className="bg-sla">
            <div className="flex flex-row p-6 bg-inherit">
                <div className='basis-1/2'>
                    <h1 className=' text-left text-6xl'><strong className='stylizedSig'>Gage Gabaldon</strong></h1>
                    <h2 className='text-left pt-3'>Computer Scientist and Software Engineer</h2>
                </div>
                <div className='flex flex-row-reverse basis-1/2'>
                    <div className='basis-1/2'>
                        <h3 className="text-lg">
                            Contact Me
                        </h3>
                        <SocialFollow className=""/>
                    </div>
                    <div className='basis-1/2'>
                        <h3 className="text-lg">
                            Other Pages
                        </h3>
                        <ul className=''>
                            <LinkButton link="/" name="Home"/>
                            <LinkButton link="/about" name="About"/>
                            <LinkButton link="/resume" name="Resume"/>
                            <LinkButton link="/projects" name="Career"/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-1 text-sm'>
                Created by Gage Gabaldon and continously updated since 2022.  
            </div>  
        </footer>
    );
}

function LinkButton(props){
    return(
        <li>
            <Link to={props.link} className=" hover:text-black">{props.name}</Link>
        </li>
    );
}