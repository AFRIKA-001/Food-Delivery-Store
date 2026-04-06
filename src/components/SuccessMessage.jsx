import React, { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'
import Modal from '../UI/Modal'

function SuccessMessage() {
const userProgressContext = useContext(UserProgressContext)
function closeModal(){
    userProgressContext.HideSuccessMessage();
}

  return <Modal open={userProgressContext.Progress === 'success' } className=' rounded-sm scrollbar-hide  h-60 w-160 m-auto backdrop:bg-stone-900/90'>
    <div className='  text-center m-10'>
     <h2 className='text-3xl font-mono p-4'>Success!🎊</h2>
    <p className='italic text-2xl font-mono'> your JAHA feast is on the Way! <span className='text-3xl'>🍔</span></p>
    </div>
    <button className='flex mx-auto w-20 justify-center bg-gray-400 hover:bg-gray-600 active:bg-gray-800 font-black border mb-10' onClick={closeModal}>Ok</button>
  </Modal>
    
      

  
}

export default SuccessMessage
