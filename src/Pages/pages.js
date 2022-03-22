import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {GiPresent} from 'react-icons/gi';
import {Footer} from './footer';
import {Header} from './header';
import face from '../resources/images/mainface.jpg';

export function Home(){
    return(
        <>
            <Header />
            <main className="text-center content-center">
                <div className='bg-black'>
                    <h1 className='p-10 text-4xl'> Welcome to the site of Gage Aaron Gabaldon</h1>
                </div>
                <div className="flex flex-row min-h-min slide">
                    <div className='basis-1/5'>
                        <img src={face} alt="yo" ></img>
                    </div>
                    <div className='basis-1/5'>
                        <img src={face} alt="yo" ></img>
                    </div>
                    <div className='basis-1/5'>
                        <img src={face} alt="yo" ></img>
                    </div>
                    <div className='basis-1/5'>
                        <img src={face} alt="yo" ></img>
                    </div>
                    <div className='basis-1/5'>
                        <img src={face} alt="yo" ></img>
                    </div>
                </div>
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
                <img src={require("../resources/images/mainface.jpg")} alt="Gage Gabaldon Face"></img>
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
        <main className="grid place-items-center h-screen">
            <div>
                <strong>Error</strong>: {location.pathname} is not a valid page ...
                <div className=' m-10'>
                Please use a valid address and if you somehow got here without doing anything wrong heres a prize <GiPresent className=" inline h-50"/>.
                </div>
            </div>
            <div>
                <div>
                    Click <Link to="/" className="
                        transition duration-500 ease-in-out 
                        bg-slate-100 hover:bg-black transform 
                        hover:-translate-y-1 hover:scale-110 hover:text-slate-100
                        rounded-md p-2 text-black ">Here</Link> or  
                        <Link to="/" className="
                        transition duration-500 ease-in-out 
                        bg-slate-100 hover:bg-black transform 
                        hover:-translate-y-1 hover:scale-110 hover:text-slate-100
                        rounded-md p-2 text-black">Home</Link> to go back. 
                </div>
            </div>
        </main>
    );

}

