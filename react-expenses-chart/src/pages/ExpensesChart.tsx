import Header from '../components/Header'
import Main from '../components/Main'

const ExpensesChart = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='max-w-[33.75rem] w-full'>
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default ExpensesChart