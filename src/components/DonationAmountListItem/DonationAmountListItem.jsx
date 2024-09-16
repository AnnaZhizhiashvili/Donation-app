import './DonationAmountListItem.css';

const DonationAmountListItem = ({ identifier, amount, selectedAmount, handleAmountSelect, disabled = false, text = '' }) => {
    return (
        <>
            <input
                type="radio"
                id={identifier}
                name="donationAmount"
                value={amount}
                checked={selectedAmount === amount}
                onChange={() => handleAmountSelect(amount)}
                disabled={disabled}
            />
            <label htmlFor={identifier}
                   className={(disabled ? 'disabled' : '') + (selectedAmount === amount ? 'selected' : '') + (" flex justify-content-center")}>
                {text ? <span>{text} </span> : <span>£{amount}</span>}
                {disabled && <img alt="secure-logo" src="assets/secure.svg"></img>}
            </label>
        </>
    );
};


export default DonationAmountListItem;