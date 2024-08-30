import React, { useState } from 'react'
import MenuList from './MenuList'
import { FaMinus,FaPlus,FaPlug } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]:!displayCurrentChildren[getCurrentlabel],
    })
  }
  return (
      <li>
        <div style={{display:'flex',gap:'20px'}}>
          <p>{item.label}</p>
          {item && item.children && item.children.length > 0 ? <span onClick={handleToggleChildren}>
            {
            displayCurrentChildren[item.label] ? '-' : <FaPlus color="#white"
              />
            }
            </span> : null}
        </div>
        {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
          (
            <MenuList list={item.children} />
          ) : null}
      </li>
  )
}

export default MenuItem