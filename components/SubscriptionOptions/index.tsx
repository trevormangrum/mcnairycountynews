import React from "react";
interface Props {
  setValues: any;
}
const SubscriptionOptions: React.FC<Props> = ({ setValues }) => {
  return (
    <div className="sub-options">
      <div className="sub-body">
        <input
          type="radio"
          name="sub-option"
          value="standard"
          onClick={() =>
            setValues(values => ({
              ...values,
              ["sub-option"]: "standard",
            }))
          }
        />
        <div className="sub-text">
          <h2>Standard Edition</h2>
          <div className="sub-pricing">
            <div>
              <span>In county:</span>
              <span>$30.00</span>
            </div>
            <div>
              <span>Out of county:</span>
              <span>$35.00</span>
            </div>
          </div>
          <h3>Features</h3>
          <p>
            Receive a copy of McNairy County News weekly by mail, a day before
            the public release.
          </p>
          <p>Optionally comes with an email subscription at no extra cost.</p>
        </div>
      </div>
      <div className="sub-body">
        <input
          type="radio"
          name="sub-option"
          value="email"
          onClick={() =>
            setValues(values => ({
              ...values,
              ["sub-option"]: "email",
            }))
          }
        />
        <div className="sub-text">
          <h2>Email Edition</h2>
          <div className="sub-pricing">
            <div>
              <span>Price:</span>
              <span>$15.00</span>
            </div>
          </div>
          <h3>Features</h3>
          <p>Receive McNairy County News by email every week.</p>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionOptions;
