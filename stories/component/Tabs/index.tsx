import React from "react";
import { useState } from "react";
import '../../assets/style.css'

type TabTitleProps = {
  tabListTitle: Array<string>
  type: string
  position: string
};

export const Tabs = ({ tabListTitle, type, position }: TabTitleProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const cloneData = [...tabListTitle]
  const [dataCloseType, setDataCloseType] = useState(cloneData)
  const handleClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex === activeTabIndex ? activeTabIndex : tabIndex);
  };
  const handleClickCloseTab = (tabIndex: number) => {
    setActiveTabIndex(tabIndex === activeTabIndex ? activeTabIndex : tabIndex);
    setDataCloseType(dataCloseType.slice(tabIndex))
  }

  const renderTab = (type: string) => {
    switch (type) {
      case 'normal':
        return (
          <ul className="tabs-nav">
            {tabListTitle.map((title, index) => (
              <li className={`tab-item ${index === activeTabIndex ? "active" : ""}`} onClick={() => handleClick(index)}>
                {title}
              </li>
            ))}
          </ul>
        )
      case 'closable':
        return (
          <ul className="closeTab">
            {dataCloseType.map((title, index) => (
              <li className={`tab-item ${index === activeTabIndex ? 'selected' : ''}`}
                onClick={() => handleClickCloseTab(index)}
                key={index}>
                {title}
              </li>
            ))}
          </ul>
        )
      case 'tabInline':
        return (
          <ul className="tabInline left">
            {tabListTitle.map((title, index) => (
              <li className={`tab-item ${index === activeTabIndex ? 'active' : ''}`}
                onClick={() => handleClickCloseTab(index)}
                key={index}>
                {title}
              </li>
            ))}
          </ul>
        )
      default:
        break;
    }
  }

  const tabsContent = (activeTabIndex: number) => {
    return (
      <div>Content</div>
    )
  }

  return (
    <div className={type + `-wrap ` + position}>
      {
        renderTab(type)
      }
      {
        tabsContent(activeTabIndex)
      }
    </div>
  );
};
