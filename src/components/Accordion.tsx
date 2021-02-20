import React, { FunctionComponent, useState } from 'react'
import ITitleContent from '../ITitleContent'

const Accordion : FunctionComponent<{ items: ITitleContent[] }> = (props: { items: ITitleContent[] }) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const onItemClickHandler = (i: number) => {
    console.log('onItemClickHandler item clicked:', i)
    setActiveIndex(i)
  }

  const renderendItemd = props.items.map((x, i) => {
    const active = i === activeIndex ? 'active' : ''

    return (
            <div className="ui styled accordion" key={x.title}>
                <div className={`title ${active}`}
                    onClick={() => onItemClickHandler(i)}>
                    <i className="dropdown icon"></i>
                    {x.title}
                </div>
                <div className={`content ${active}`}>
                    {x.content}
                </div>
            </div>
    )
  })

  return (
        <div>
            {renderendItemd}
        </div>
  )
}
export default Accordion
