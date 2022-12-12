import React from 'react'


import { DotSpinner } from '@uiball/loaders'



function Loader() {
  return (
<div className='text-center'>
<DotSpinner 
 size={40}
 speed={0.9} 
 color= "grey"
 
/>
</div>
  );
}

export default Loader;   


