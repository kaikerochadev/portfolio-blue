import React from 'react'
import CV from '../../assets/CV-KaikeRochaDev.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Baixar CV</a>
        <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
    </div>
  )
}

export default CTA