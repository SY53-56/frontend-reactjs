import React from 'react'
import Input from '../components/Input'
import { Send, Headset } from 'lucide-react' // Adding icons for a better look

export default function CustomerService() {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4'>
      <div className='w-full max-w-2xl bg-gray-300 rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden border border-gray-100'>
        
        {/* Header Section */}
        <div className='bg-gray-950 p-8 text-white flex items-center gap-5'>
          <div className='p-3 bg-blue-600 rounded-lg'>
             <Headset size={32} />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>Customer Support</h1>
            <p className='text-gray-400 text-sm'>We typically respond within 2-4 hours.</p>
          </div>
        </div>

        {/* Form Section */}
        <form className='p-8 lg:p-12 flex flex-col gap-6' onSubmit={(e) => e.preventDefault()}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Input 
              name="name" 
              label="Full Name" 
              placeHolder="Enter your name" 
              className="focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <Input 
              name="number" 
              label="Phone Number" 
              placeHolder="+91 00000-00000" 
              className="focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold text-gray-700 capitalize'>Message</label>
            <textarea 
              name="description" 
              rows="5" 
              placeholder="How can we help you today?"
              className='w-full p-4 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-gray-800'
            />
          </div>

          <button className='mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-blue-600/20'>
            <Send size={18} />
            Send Inquiry
          </button>
        </form>

        <div className='bg-gray-50 p-4 border-t border-gray-100'>
          <p className='text-center text-xs text-gray-500'>
            By submitting this form, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </section>
  )
}