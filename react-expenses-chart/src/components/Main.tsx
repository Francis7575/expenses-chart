import data from '../data.json'
import { useState } from 'react';

const Main = () => {
    const chartHeights = [50, 100, 150, 89, 67, 124, 73];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <main className="bg-white rounded-[.62rem] md:rounded-[1.25rem] py-[1.5rem] md:pt-[2rem]
                md:pb-[2.56rem] px-[1.25rem] md:px-[2.5rem]">
            <h2 className="text-[1.5rem] font-bold text-dark-brown md:text-[2rem]">
                Spending - Last 7 days
            </h2>

            <section className="mt-[3.25rem] flex justify-between items-end border-b-2 border-cream pb-[1.5rem]">
                {chartHeights.map((height, index) => (
                    <div key={index} className='max-w-[2.063rem] md:max-w-[3.125rem]'>

                        <div className='flex justify-center'>
                            <div className={`bg-dark-brown rounded-[.31rem] p-[.15rem] text-center mb-[.5rem] 
                                md:p-[.5rem] w-full'
                            ${hoveredIndex === index ? 'opacity-1 transition-opacity duration-300' : 'opacity-0'}`}>
                                <p className='text-[.65rem] md:text-[1.12rem] text-card-white'>
                                    ${data[index].amount}
                                </p>
                            </div>
                        </div>
                        
                            <div className={`red-charts same-class ${index === 2 && 'cyan-chart'} `}
                                style={{ height: `${height}px` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}>
                            </div>
                        <p className='text-center mt-[.62rem] text-[.75rem] text-medium-brown md:text-[.93rem]'>
                            {data[index].day}
                        </p>
                    </div>
                ))}
            </section>

            <section className='mt-[1.5rem]'>
                <p className='text-[.93rem] text-medium-brown md:text-[1.12rem]'>
                    Total this month
                </p>
                <div className='flex justify-between items-center'>
                    <span className='text-dark-brown text-[1.87rem] font-bold md:text-[3rem]'>
                        $478.33
                    </span>
                    <div className='text-right text-[.93rem] md:text-[1.12rem]'>
                        <span className=' font-bold text-dark-brown'>
                            +2.4%
                        </span>
                        <p className='text-medium-brown'>
                            from last month
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main