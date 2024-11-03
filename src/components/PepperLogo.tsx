import React from 'react'
import logo from '/artifacts/logo_pilpel.png'

const PepperLogo = ({ className = "w-6 h-6" }) => {
  return (
    <img src={logo} alt="Pilpel.ai Logo" className={className} />
  )
}

export default PepperLogo 