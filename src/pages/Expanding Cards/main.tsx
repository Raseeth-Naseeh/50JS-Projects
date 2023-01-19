import React from 'react'
import * as Router from 'react-router-dom'
import './cards.css'
import img1 from 'src/assets/img1.jpeg'
import img2 from 'src/assets/img2.webp'
import img3 from 'src/assets/img3.jpeg'
import img4 from 'src/assets/img4.jpg'
import img5 from 'src/assets/img5.jpeg'
import * as Component from 'src/components'
export const Main = () => {
  const [expanded, setExpanded] = React.useState<any>(false)

  const Data = [
    {
      name: 'Collections',
      img: img1,
    },
    {
      name: 'Metaverse',
      img: img2,
    },
    {
      name: 'Naruto',
      img: img3,
    },
    {
      name: 'Photography',
      img: img4,
    },
    {
      name: 'Boys',
      img: img5,
    },
  ]
  const handleExpandClick = (item: any, index: any) => {
    setExpanded({ [index]: !expanded[index] })
  }
  return (
    <div className="containerMain">
      <h3>Click To Expand Cards</h3>
      <div className="container">
        {Data.map((item, index) => {
          return (
            <div
              className={`panel ${expanded[index] && 'active'}`}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              onClick={() => {
                handleExpandClick(item, index)
              }}
            >
              <h3 className={`font ${expanded[index] && 'fontactive'}`}>
                {item.name}
              </h3>
            </div>
          )
        })}
      </div>
      <Component.Arrow />
    </div>
  )
}
