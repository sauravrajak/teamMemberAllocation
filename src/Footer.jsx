import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <footer>
      <div className='row justify-content-center mt-3'>
        <div className='col-8'>
          <h3>Team Member Allocation App Today : {date.getFullYear()} </h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
