import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

function AccordionItem({ title, description, type }) {
  const [showDes, setShowDes] = useState(false)
  const [height, setHeight] = useState(0)
  const accRef = useRef(null)
  const itemClick = () => {
    setShowDes(prev => !prev)
  }
  useEffect(() => {
    if (accRef.current) {
      setHeight(accRef.current?.scrollHeight)
    }
  }, [showDes])

  return (
    <div className={`accordion_item ${showDes ? 'show' : ''}`} onClick={itemClick}>
      {
        type == 'psub' ? (
          <>
            <div className="accordion_title">
              {title}
            </div>
            <div ref={accRef} style={showDes ? { maxHeight: `220px`, opacity: 1 } : { maxHeight: '0px', opacity: 0 }} className="accordion_des">
              <p>
                {description}
              </p>
            </div>
          </>
        )
          :
          <>
            <div className="accordion_title">
              <MdKeyboardArrowDown />
              {title}
            </div>
            <div ref={accRef} style={showDes ? { maxHeight: `220px`, opacity: 1 } : { maxHeight: '0px', opacity: 0 }} className="accordion_des">
              <p>
                {description}
              </p>
            </div>
          </>
      }

    </div>
  )
}

export default AccordionItem
