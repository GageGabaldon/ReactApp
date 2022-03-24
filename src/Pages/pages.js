import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {GiPresent} from 'react-icons/gi';
import {Footer} from './footer';
import {Header} from './header';
import {Slideshow, SlaButton} from './cool-components';

const aboutMe = 'Hello, welcome to a small part of my journey in the field of computer science. ' +
                'Growing up in the small town of Snowflake, Arizona I never knew that I would end up here creating my own website. ' +
                'Looking back however, my love of computers has been evident and grew from a small hobby to now a major part of my life. ' + 
                'This facination was motivated by the curiousity and cool things you can do with computers from basic pc rigs to solving the wonders of the cosmos. ' +
                "I helped develop this spark with my education at Northern Arizona University pursuing a Bachelor's of Computer Science. " +
                'Where I graduated Magma Cum Laude with a minor of math.'

const p2 =    'With all the education I recieved and all the hard work through wrestling or construction work, I am ready to step into the next part of my life. ' +
              'All the stepping stones to get here from long summers doing roofing, long nights doing homework, and helping family members. Has and will help me serve the goal' + 
                ' of serving others and to pursue a career in this field.' +
                '';

export function Home(){
    return(
        <>
            <Header />
            <main className="text-center content-center">
                <div className='naubackground'>
                    <h1 className='p-10 text-5xl'>Welcome to Gage Aaron Gabaldon</h1>
                </div>
                <div className="flex flex-row bg-sla">
                    <section className='basis-1/2'>
                        <h1 className='text-2xl p-3'>
                            Brief History of Gage
                        </h1>
                        <p className='text-left m-4'>
                          {aboutMe}
                        </p>
                        <p className='text-left m-4'>
                          {p2}
                        </p>
                        <p>
                          Thanks for listening,
                        </p>
                        <p className='stylizedSig'>
                          Gage Gabaldon
                        </p>
                    </section>
                    <div className='basis-1/2 slide min-h-min mb-11 mt-2'>
                        <Slideshow />
                    </div>
                </div>
                <div className='bg-black'>
                    <section>
                      <p className='text-4xl p-4'> 
                        Check out my other pages to learn more about ...
                      </p>
                      <div className='flex flex-row'>
                          <div className='basis-1/3'>
                            <h1 className='text-lg p-2'>
                              About
                            </h1>
                            <p className='p-2'>
                              Learn more about my journey and what I have done and what I am all about
                            </p>
                            <SlaButton link='/about' name='About'/>
                          </div>
                          <div className='basis-1/3'>
                            <h1 className='text-lg p-2'>
                              Career
                            </h1>
                            <p className='p-2'>
                              Look into some of the projects I have been apart of and what I have learned.
                            </p>
                            <SlaButton link='/projects' name='Career'/>

                          </div>
                          <div className='basis-1/3'>
                            <h1 className='text-lg p-2'>
                              Resume
                            </h1>
                            <p className='p-2'>
                              Look into my current resume and what I can bring to you.
                            </p>

                            <SlaButton link='/resume' name='Resume'/>
                          </div>
                      </div>
                    </section>
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
            <div className=''>
                <p className='text-4xl'><strong className='text-sla'>Error</strong>: {location.pathname} is not a valid page ...</p>
                <div className=' m-10 text-2xl'>
                Please use a valid address and if you somehow got here without doing anything wrong heres a prize <GiPresent className=" inline h-50"/>.
                </div>
            </div>
            <div>
                <div className='text-xl'>
                    Click <ErrorButton name='here' /> or  
                    <ErrorButton name='Home' /> to go back.
                </div>
            </div>
        </main>
    );

}

function WhoAmI(){

    return(
        <div className="flex flex-row">
            <div className='basis-1/2 bg-white text-black'>
                <h3>Decription</h3>
            </div>
            <div id='mainface' className='basis-1/2'>
                <img src={require("../resources/images/collar.jpg")} alt="Gage Gabaldon Face" className='w-1/2 h-auto inline'></img>
            </div>
        </div>
    );
}

function ErrorButton(props) {
  return(
    <Link to="/" className="
                        transition duration-500 ease-in-out 
                        bg-slate-100 hover:bg-black transform 
                        hover:-translate-y-1 hover:scale-110 hover:text-slate-100
                        rounded-md p-2 text-black ">{props.name}</Link>
  );
}

function resumeComp(){
  return(
    <div>
    </div>
  );
}

function saintMarysProject(){
  return(
    <div>

    </div>
  );
}