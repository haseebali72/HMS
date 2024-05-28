import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='text-right'>
        <button>
          LogOut<FontAwesomeIcon icon={faArrowAltCircleRight}/>
        </button>
      </nav>
    </>
  )
}

export default Navbar