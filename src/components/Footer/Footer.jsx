import "./Footer.css";

const Footer = ({isMonthly, setIsMonthly, handleAmountSelect}) => {
    const handleClick = (isMonthlyOption) => {
        if (isMonthlyOption === isMonthly) return;
        setIsMonthly(!isMonthly);
        handleAmountSelect('');
    }
    const text = isMonthly ? "I would like to make a on-off donation" : "I would like to give monthly"
        return (
            <div className="footer padding-x-md flex justify-content-between">
                <div>
                    <a href="#" onClick={handleClick} className="donation-link text-color font-size-sm">{text}</a>
                </div>
                <div className="flex gap-md align-items-center footer-info">
                    <p className="text-color font-size-xs text-align-center">
                       All Direct Debits are protected by the Direct Debit Guarantee.
                    </p>
                    <div className="flex gap-md">
                        <img alt="direct debit logo" src="assets/direct-debit-logo.png"/>
                        <img alt="fundraising regulator logo" src="assets/fundraising-regulator-logo.png"/>
                    </div>
                </div>
            </div>
        )

}

export default Footer;