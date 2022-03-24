import React from 'react';
import face from '../resources/images/grad.jpg';
import collar from '../resources/images/collar.jpg';
import tiedye from '../resources/images/tiedye.jpg';
import {Link} from 'react-router-dom';



const colors = [tiedye, face, collar];
const delay = 4000;

export function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundImage, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundImage}
            alt="slideshow images"
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export function SlaButton(props){
    return(
        <div className='p-4 flex flex-1'>
            <Link to={props.link} className="
                        transition duration-500 ease-in-out 
                        bg-slacomp hover:bg-sla transform 
                        hover:-translate-y-1 hover:scale-110 hover:text-black
                        rounded-md text-white w-full self-stretch p-2">{props.name}</Link>
        </div>
    );
}