import './App.css';
import { useState } from 'react';


const DonationAmountListItem = ({ index, amount, selectedAmount, handleAmountSelect, disabled = false, text = '' }) => {
    return (
        <>
            <input
                type="radio"
                id={index}
                name="donationAmount"
                value={amount}
                checked={selectedAmount === amount}
                onChange={() => handleAmountSelect(amount)}
                disabled={disabled}
            />
            <label htmlFor={index}
                   className={(disabled ? 'disabled' : '') + (selectedAmount === amount ? 'selected' : '')}>
                {text ? <span>{text} </span> : <span>£{amount}</span>}
                {disabled && <img alt="secure-logo" src="assets/secure.svg"></img>}
            </label>
        </>
    );
};

const InfoContainer = ({text}) => {
    return (
        <div className="info-container flex font-size-sm align-items-baseline">
            <p>{text}</p>
        </div>
    );
};
const DonationAmountOptions = ({selectedAmount, handleAmountSelect}) => {
    const amounts = [
        {
            amount: 6,
            type: "radio"
        },
        {
            amount: 12,
            type: "radio"
        },
        {
            amount: 18,
            type: "radio"
        },
        {
            amount: 30,
            type: "radio"
        },
        {
            amount: null,
            type: "number"
        },
        {
            text: "Donate £12 monthly",
            type: "radio",
            disabled: true
        }
    ];
    const infoText = "£ 12 Could help answer an emergency call to our Animal Rescue Line";


    return (
        <div className="padding-x-lg">
            <h2 className="text-color">I would like to make a monthly donation of</h2>
            <ul className="amount-list">
                {
                    amounts.map((amount, index) => {
                        return (
                            <li key={index}>
                                {amount.type === "radio" && amount.disabled ? (
                                    <DonationAmountListItem
                                        text={amount.text}
                                        index={index}
                                        disabled={true}
                                        amount={amount.amount}
                                        selectedAmount={selectedAmount}
                                        handleAmountSelect={handleAmountSelect}
                                    />
                                ) : amount.type === "radio" && !amount.disabled ? (
                                    <DonationAmountListItem
                                        index={index}
                                        amount={amount.amount}
                                        selectedAmount={selectedAmount}
                                        handleAmountSelect={handleAmountSelect}
                                    />
                                ) : (
                                    <input
                                        type="number"
                                        name="donationAmount"
                                        placeholder="Other amount"
                                        min={1}
                                        onChange={(e) => handleAmountSelect(e.target.value)}
                                    />
                                )}
                            </li>
                        );
                    })
                }
            </ul>
            <InfoContainer text={infoText} />
        </div>
    );
};

const Tabs = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [selectedAmount, setSelectedAmount] = useState(''); // Rename handleAmountSelect to setSelectedAmount
    return (
        <div className="container">
            <div className="tabs-container">
                <button onClick={() => setIsMonthly(true)} className={`tab ${isMonthly ? 'active' : ''}`}>
                    Donate monthly
                </button>
                <button onClick={() => setIsMonthly(false)} className={`tab ${!isMonthly ? 'active' : ''}`}>
                    Donate once
                </button>
            </div>
            <div className="content">
                <DonationAmountOptions selectedAmount={selectedAmount} handleAmountSelect={setSelectedAmount}/>
            </div>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Tabs>
            </Tabs>
        </div>
    )
}

export default App