import React from "react";
interface Props {
  inputType: string;
  labelText: string;
  inputName: string;
  inputPlaceholder: string;
  value?: any;
  handleChange?: any;
}
const InputGroup: React.FC<Props> = ({
  inputType,
  labelText,
  inputPlaceholder,
  inputName,
  value,
  handleChange,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName}>{labelText}</label>
      {inputType != "textarea" &&
        inputType != "select" &&
        inputType != "file" &&
        inputType != "radio" && (
          <input
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            value={value || null}
            onChange={handleChange}
            required
          />
        )}
      {inputType == "file" && (
        <input
          type={inputType}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={handleChange}
          required
        />
      )}
      {inputType == "textarea" && (
        <textarea name={inputName} placeholder={inputPlaceholder} required />
      )}
      {inputType == "select" && inputName == "priority" && (
        <select name={inputName} value={value} onChange={handleChange} required>
          <option value="">
            Please select a priority from the fields below.
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      )}
      {inputType == "select" && inputName != "priority" && (
        <select name={inputName} value={value} onChange={handleChange} required>
          <option value="">Please select a state from the fields below.</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      )}
      {inputType == "radio" && (
        <div className="checkbox-container">
          <div>
            <input
              type="radio"
              name={inputName}
              value="Yes"
              onClick={handleChange}
            />
            <label htmlFor={inputName}>Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name={inputName}
              value="No"
              onClick={handleChange}
            />
            <label htmlFor={inputName}>No</label>
          </div>
        </div>
      )}
    </div>
  );
};
export default InputGroup;
