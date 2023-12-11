import React from 'react'

import { CustomButton } from './CustomButton'


const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Entre une description de ce que tu souhaites'
        rows={5}
        value={prompt}
        onChange={ (e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="génération en cours"
            customStyles="text-xs" 
          />
        ) : (
            <>
            <CustomButton
              type="outline"
              title="Un logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="Un pattern"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker