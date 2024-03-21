import React from 'react'

const  PageTopTextComponent = ({title,discription}) => {
  return (
    <div className='flex flex-col md:px-[18px]'>
    <h2 className='font-semibold font-inter text-[30px] text-[#0E9EDA] sm:leading-[40px] md:leading-[55px] lg:text-[55px] md:text-[40px] sm:text-[35px] text-start' dangerouslySetInnerHTML={{ __html: title }} />
    <p className='font-inter md:pt-[25px] sm:pt-[18px]  text-[#5B5F62] text-justify leading-[25px] text-[17px] font-[500]' dangerouslySetInnerHTML={{ __html: discription }}/>    
</div>
  )
}

export default PageTopTextComponent