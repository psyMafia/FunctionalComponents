
//last 152

import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import  ITitleContent  from './ITitleContent';

const items: ITitleContent[] = [
  {
    title: "t1",  
    content: "c1"
  },
  {
    title: "t2",  
    content: "c2"
  },
  {
    title: "t3",  
    content: "c3"
  },
  
]


const  App: React.FC =()=> {
  return (
    <div className="ui container segment">
      
      <div>
      {/* <Accordion items={items}  /> */}
      <Search></Search>
      </div>
    </div>
  );
}

export default App;
