import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import '../../assets/style.css'

const Tag = ({ tagName, type, listTag }) => {
  
  const [newListTag, setNewListTag] = useState(listTag)
  const removeItem = (index) => {
    return setNewListTag(listTag.splice(index+1))
  }
  
  return (
    type !== 'remove' ?
      <span className={`tag ${type}`}>{tagName}</span>
      :
      <ul className="list-tag">
        {
          newListTag.map((item, index) => (
            <li key={index} onClick={() => removeItem(index)}>
              <span className={`tag remove`}>{item}
                <svg fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="10" height="10" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg></span>
            </li>
          ))
        }
      </ul>


  )

}

export default Tag

Tag.prototype = {
  tagName: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'processing', 'default', 'remove']),
  listTag: PropTypes.array,
}