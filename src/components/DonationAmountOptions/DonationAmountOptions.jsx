import './DonationAmountOptions.css'
import DonationAmountListItem from '../DonationAmountListItem/DonationAmountListItem.jsx';
import InfoContainer from '../InfoContainer/InfoContainer.jsx';

const DonationAmountOptions = ({isMonthly, selectedAmount, handleAmountSelect}) => {
    const oneTimeAmounts = [10, 40, 75, 100]
    const monthlyAmounts = [6, 12, 18, 30];
    const amounts = isMonthly? monthlyAmounts : oneTimeAmounts;
    const radioButtonText = isMonthly? "Donate £12 monthly" : "Donate £40 today";
    const infoText = isMonthly ? "£12 could help answer an emergency call to our Animal Rescue Line" :
        "£40 could help an Animal Rescue Team take on urgent animal rescue";

    return (
        <div className="padding-x-md">
            <h2 className="text-color">I would like to make a monthly donation of</h2>
            <ul className="amount-list">
                <div className="standard-items-container flex gap-sm">
                    {
                        amounts.map((amount, index) => {
                            return (
                                <li key={index} className="standard-item">
                                    <DonationAmountListItem
                                        identifier={index}
                                        amount={amount}
                                        selectedAmount={selectedAmount}
                                        handleAmountSelect={handleAmountSelect}
                                    />
                                </li>)
                        })

                    }
                </div>
                <div className="non-standard-items-container flex gap-sm">
                    <li>
                        <input
                            type="number"
                            name="donationAmount"
                            placeholder="£ Other amount"
                            min={1}
                            onChange={(e) => handleAmountSelect(e.target.value)}
                        />
                    </li>
                    <li>
                        <DonationAmountListItem
                            text={radioButtonText}
                            identifier={amounts.length}
                            disabled={true}
                            selectedAmount={selectedAmount}
                            handleAmountSelect={handleAmountSelect}
                        />
                    </li>
                </div>
            </ul>
            <InfoContainer text={infoText}/>
        </div>
    );
};

export default DonationAmountOptions;