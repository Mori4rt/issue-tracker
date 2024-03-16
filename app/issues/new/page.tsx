import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='flex flex-col gap-y-5 max-w-xl' >
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
        <button className='btn btn-primary w-fit'> 
            add
      </button>
    </div>
  )
}

export default NewIssuePage