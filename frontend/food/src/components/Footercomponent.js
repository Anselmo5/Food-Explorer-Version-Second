import React from 'react'
import food from '../assets/foodexplorer.png'
import './Footercomponent.css'
const Footercomponent = () => {
  return (
    <div>
        <footer>
            <div className='alingfooter'>
                <img src={food}/>
                <h3>© 2023 - Todos os direitos reservados.</h3>
            </div>
      </footer>
    </div>
  )
}
export default Footercomponent
