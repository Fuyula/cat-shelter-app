import React from 'react';
import '../styles/components/boolean-radio-button.scss';
import PropTypes from 'prop-types';

const BooleanRadioButton = ({ option1, option2, value, setValue }) => {
  return (
    <form className = 'boolean-radio-button-container'>
      <div className = "container-fluid d-flex flex-row justify-content-center">
          <div className = "form-check form-check-inline">
              <input 
                className = "form-check-input" 
                type = "radio"
                name ="inlineRadioOptions" 
                value = { option1 } 
                onChange = { (e) => setValue( e.target.value ) } 
                checked = { value === option1 }
              />
              <label className = "form-check-label"> { option1 } </label>
          </div>
          <div className = "form-check form-check-inline">
              <input 
                className = "form-check-input" 
                type = "radio" 
                name = "inlineRadioOptions" 
                value = { option2 } 
                onChange = { (e) => setValue( e.target.value ) } 
                checked = { value === option2 }
              />
              <label className = "form-check-label"> { option2 } </label>
          </div>
      </div>
    </form>
  )
}

BooleanRadioButton.propTypes = {
  option1: PropTypes.string,
  option2: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

BooleanRadioButton.defaultProps = {
  option1: "",
  option2: "",
}

export default BooleanRadioButton