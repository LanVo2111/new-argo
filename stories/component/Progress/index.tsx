import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types';
import '../../assets/style.css'

interface ProgressProps {
  status?: string
  percentValue?: number
  type?: string
  showInfo?: boolean
  percentPosition: string
  setSize: boolean
  size?: { width: number, height: number }
  numberStep?: number
}

const handleBackgorundType = (status: string) => {
  switch (status) {
    case 'normal':
      return `#1677FF`
    case 'active':
      return `#1677ff`
    case 'exception':
      return `#ff4d4f`
    case 'success':
      return `#52c41a`
    default:
      return `#1677FF`
  }
}

const BbgStyled = styled.div<{ className: string, percentValue: number, status: string, type: string, setSize: boolean, size: { width: number, height: number } }>`
  ${props => props.type === 'normal' &&
    ` 
      width: ${props.size.width > 0 && props.setSize ? `${props.size.width}px` : '100%'};
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.06);
      border-radius: 100px;
      height: ${props.size.height > 0 && props.setSize ? `${props.size.height}px` : '8px'};
      &::after {
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
        border-radius: 100px;
        width: ${props.percentValue}%;
        background-color: ${handleBackgorundType(props.status)}
      }
    `}
  position: relative;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`

export const Progress = ({
  percentValue = 30,
  showInfo,
  status = "active",
  type = 'normal',
  percentPosition,
  size = {
    width: 200,
    height: 30
  },
  setSize = false,
  numberStep = 4
}: ProgressProps) => {
  const refSvg = useRef<SVGSVGElement>(null)
  const [strokeValue, setStrokeValue] = useState('')
  const [currentStep, setCurrentStep] = useState(0)

  const checkRenderPercentValue = () => {
    if (showInfo) {
      return `${percentValue}%`
    } else {
      if (status === 'exception') {
        return (
          <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z">

          </path>
          </svg>
        )
      }
      else if (status === 'success') {
        return (
          <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
        )
      } else {
        return false
      }
    }
  }

  const renderPercentPosition = (position: string) => {
    return position
  }

  useEffect(() => {
    const round = document.getElementById('round')
    const roundRadius = round?.children[0].getAttribute('r')
    const roundPercent = round?.dataset.percent
    const roundCircum = roundRadius && (2 * parseInt(roundRadius) * Math.PI)
    const roundDraw = roundPercent && roundCircum && (parseInt(roundPercent) * roundCircum / 100)
    setStrokeValue(roundDraw + ' 999')
  }, [percentValue])

  const nextStep = () => {
    if(currentStep < numberStep - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  return (
    <div className={`progress ${type} ${renderPercentPosition(percentPosition)}`} number-step={numberStep}>
      {
        type === 'normal' && (
          <>
            <BbgStyled
              className={`progress_line ${type}`}
              type={type}
              percentValue={percentValue}
              status={status}
              size={size}
              setSize={setSize}>
            </BbgStyled>
            <span className={`progress_value ${status}`}>{checkRenderPercentValue()}</span>
          </>
        )
      }
      {
        type === 'step' && (
          <>
            <ul>
              {Array.from({ length: numberStep }).map((_, index) => {
                return (
                  <li></li>
                )
              }
              )}
            </ul>
            <div className="progress-bar" style={{width: `${currentStep * 200}px`}}></div>
            <button className="btnNextStep" onClick={nextStep}>Next</button>
          </>
        )
      }
    </div>
  )
}

Progress.prototype = {
  showInfo: PropTypes.bool,
  status: PropTypes.oneOf(['normal', 'active', 'exception', 'success']),
  type: PropTypes.string,
  percentPosition: PropTypes.string,
  setSize: false,
  size: { width: 200, height: 30 },
}


