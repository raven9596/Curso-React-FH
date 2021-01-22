import React, { useRef } from 'react';
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

  const inputRef = useRef();
  // console.log(ref);
  

  const handleClick = () => {
  
     inputRef.current.focus();
  };

  return (
		<div>
			<h1>Focus Screen</h1>
			<hr />

			<input 
          ref={ inputRef } 
          className="form-control" 
          placeholder="Su nombre" 
      />

			<button className="btn btn-dark mt-3" onClick={handleClick}>
				Focus
			</button>
		</div>
	);
}
