import './Container.css';
import { useState } from 'react';
import DonationAmountOptions from '../DonationAmountOptions/DonationAmountOptions.jsx';
import Footer from '../Footer/Footer.jsx';

const Container = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [selectedAmount, handleAmountSelect] = useState('');
    const handleClick = (isMonthlyOption) => {
        if (isMonthlyOption === isMonthly) return;
        setIsMonthly(isMonthlyOption);
        handleAmountSelect('');
    }
    return (
        <div className="container">
            <div className="tabs-container">
                <button onClick={() => handleClick(true)} className={`tab ${isMonthly ? 'active' : ''}`}>
                    Donate monthly
                </button>
                <button onClick={() => handleClick(false)} className={`tab ${!isMonthly ? 'active' : ''}`}>
                    Donate once
                </button>
            </div>
            <div className="content flex flex-direction-column justify-content-between">
                <DonationAmountOptions selectedAmount={selectedAmount} handleAmountSelect={handleAmountSelect} isMonthly={isMonthly}/>
                <Footer handleAmountSelect={handleAmountSelect} isMonthly={isMonthly} setIsMonthly={setIsMonthly}/>
            </div>
        </div>
    )
}

export default Container;