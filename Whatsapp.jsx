import { motion as m } from 'motion/react';
 const Whatsapp = () => {
  return (
    <m.div className='fixed bottom-8 right-8 z-50  rounded-full p-2'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
        <a href="https://wa.me/254714058073" target="_blank" rel="noopener noreferrer">
       <img src="https://www.citypng.com/public/uploads/preview/hd-whatsapp-wa-whats-app-logo-icon-symbol-png-image-7017516947893641xuqccnsxx.png?v=2026060210" alt="WhatsApp" className='w-15 h-15 rounded-full' />
       <span className='text-sm  w-2 h-2 animate-ping bg-green-500 rounded-full absolute top-2 right-0'></span>
        </a>
    </m.div>
  )
}
export default Whatsapp;    