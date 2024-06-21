import React from 'react'

export default function Title({text, className}: {text: string, className: string}) {
  return (
    <div className={className}>
      <div>
              <h1 className="text-3xl font-bold hover:text-blue-300">
                {text}
              </h1>
              <div className="w-full h-2 bg-blue-500 rounded-full "></div>
            </div>
    </div>
  )
}
