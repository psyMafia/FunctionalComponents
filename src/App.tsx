/* eslint-disable @typescript-eslint/no-unused-vars */

// completed 193

import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown, { IOption } from './components/DropDown'
import Header from './components/Header'
import Route from './components/Route'
import Search from './components/Search'
import Translate from './components/Translate'
import ITitleContent from './ITitleContent'

const items: ITitleContent[] = [
  {
    title: 't1',
    content: 'c1'
  },
  {
    title: 't2',
    content: 'c2'
  },
  {
    title: 't3',
    content: 'c3'
  }

]

const options: IOption[] = [
  {
    label: 'Red',
    value: 'rad'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Green',
    value: 'green'
  }
]

const App: React.FC = () => {

  return (
    <div className="ui container segment">
      <Header></Header>
      <div>
        {/* <Accordion items={items}  /> */}
        {/* <Search></Search> */}
        {/* <Translate></Translate> */}
        {/* <Route path="/" > <Accordion items={items}  /> </Route> */}
        <Route path="/search" >  <Search></Search> </Route>
        <Route path="/translate" > <Translate></Translate> </Route>
      </div>
    </div>
  )
}

export default App
