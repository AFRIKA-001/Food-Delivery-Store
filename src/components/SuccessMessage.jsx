import React, { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'
import { Link } from 'react-router-dom'
import Modal from '../UI/Modal';


function SuccessMessage() {
const userProgressContext = useContext(UserProgressContext)
function closeModal(){
    userProgressContext.HideSuccessMessage();
}

  return <Modal open={userProgressContext.Progress==='success'} className='py-60'>
    <div className='flex flex-col justify-center items-center '>
     <h2 className=' text-xl lg:text-4xl font-mono '>Success!🎊</h2>
    <p className='italic text-[12px] lg:text-2xl font-mono'> your JAHA feast is on the Way! <span className='text-3xl'>🍔</span></p>
    <button className='flex  w-40 mt-2 justify-center bg-orange-400 hover:bg-orange-600 active:bg-gray-800 font-black border ' onClick={closeModal}>
      <Link to='/'>Go To Homepage</Link>
    </button>
    </div>
    
  </Modal>
    
      

  
}

export default SuccessMessage
