'use client'

import React from 'react'
import { useMemo } from 'react'
import dynamic from 'next/dynamic' 
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {ssr: false})
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form"


interface IssueForm {
  title: string
  discription: string
}


const NewIssuePage = () => {
  const {register, control, handleSubmit} = useForm<IssueForm>()

  const mdeOptions = useMemo(() => ({ spellChecker: false, autofocus: true}), [])

  return (
    <form className='flex flex-col gap-y-5 max-w-xl' onSubmit={handleSubmit((data) => console.log(data))}>
        <input
         type="text" 
         placeholder="Type here" 
         {...register("title")}
         className="input input-bordered w-full max-w-xs" />
           <Controller 
            name="discription"
            control={control} 
            render={({field: {onChange, onBlur, value, ref}})  => ( 
              <SimpleMDE  
                options={mdeOptions} 
                className="textarea textarea-bordered"  
                placeholder="Bio" 
                onChange={onChange} 
                onBlur={onBlur} 
                value={value}  
              /> 
            )}  
          /> 
        <button  className='btn btn-primary w-fit'> Тыкни</button>
        <button type='button' className='btn btn-primary w-fit'> Тыкни fr</button>
    </form>
  )
}

export default NewIssuePage