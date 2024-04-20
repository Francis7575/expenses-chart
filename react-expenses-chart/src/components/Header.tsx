import logo from '/assets/logo.svg'

const Header = () => {
    return (
        <header className='bg-red py-[1.25rem] pl-[1.25rem] pr-[1.5rem] rounded-[.62rem] md:rounded-[1.25rem] flex 
        justify-between items-center mb-4 md:pt-[1.68rem] md:pl-[2rem] md:pr-[2.43rem] md:mb-[1.5rem]'>
            <div>
                <h1 className='text-[.93rem] md:text-[1.12rem] text-white font-light'>
                    My balance
                </h1>
                <p className='text-[1.5rem] md:text-[2rem] font-medium text-card-white'>
                    $921.48
                </p>
            </div>
            <img src={logo} alt="Logo" className='max-w-[3.75rem] md:max-w-[4.5rem]' />
        </header>
    )
}

export default Header