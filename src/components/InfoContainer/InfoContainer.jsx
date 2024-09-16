import './InfoContainer.css';

const InfoContainer = ({text}) => {
    return (
        <div className="info-container flex font-size-sm align-items-baseline">
            <p>{text}</p>
        </div>
    );
};

export default InfoContainer;