import React from 'react'

const PageTopTextComponent = ({title,discription}) => {
  return (
    <div className='flex flex-col'>
    <h2 className='font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-start' dangerouslySetInnerHTML={{ __html: title }} />
    <p className='font-inter pt-3 text-[#5B5F62]' dangerouslySetInnerHTML={{ __html: discription }}/>    
</div>
  )
}

export default PageTopTextComponent