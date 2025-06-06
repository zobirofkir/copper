import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SubscriptionComponent = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="py-16 px-4 bg-white dark:bg-black">

      {/* Top border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-black dark:bg-white origin-left"
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image/Graphic */}
            <div className="w-full md:w-1/2 bg-black p-8 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-32 h-32 mx-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.5 14.98c-.02 0-.03 0-.05.01A3.49 3.49 0 0018 12c-1.4 0-2.6.83-3.16 2.02A2.99 2.99 0 0012 13a3 3 0 00-2.99 3.05L9 16a3.01 3.01 0 00-3-3 3 3 0 00-3 3.01L3 16c0 1.66 1.34 3 3 3h15c1.66 0 3-1.34 3-3 0-.55-.45-1-1-1h-1.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  </svg>
                </motion.div>
                <h3 className="mt-6 text-xl font-bold text-white">Stay Updated</h3>
                <p className="mt-2 text-gray-300">Get the latest news, updates, and offers directly to your inbox.</p>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="w-full md:w-1/2 p-8">
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">Join our community and be the first to know about new features and updates.</p>
                
                {subscribed ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Thank you for subscribing! We've sent a confirmation email.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-black focus:border-black bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                    >
                      Subscribe Now
                    </motion.button>
                  </form>
                )}
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionComponent