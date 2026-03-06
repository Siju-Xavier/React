import React from 'react'

const Footer = () => {

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString()
    const names = ['Siju' , 'Rolanted']
  return (
    <div>
        <footer>
            <p>
        {formattedDate} | {names.join(',')}
            </p>
        </footer>
    </div>
  )
}

export default Footer
