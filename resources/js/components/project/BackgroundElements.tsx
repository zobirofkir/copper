import React from 'react'
import { motion } from 'framer-motion'

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ 
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-gray-600/5 blur-[100px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-gray-700/5 blur-[120px]"
      />
    </div>
  )
}

export default BackgroundElements