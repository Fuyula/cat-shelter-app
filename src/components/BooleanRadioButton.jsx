import React from 'react'

const BooleanRadioButton = ({value1 = "", value2 = "", value, setValue }) => {
  return (
    <form>
      <div class="container-fluid d-flex flex-row justify-content-center">
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" value={ value1 } onChange = { (e) => setValue( e.target.value ) } checked = { value === value1 }/>
              <label class="form-check-label" >{ value1 }</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" value={ value2 } onChange = { (e) => setValue( e.target.value ) } checked = { value === value2 }/>
              <label class="form-check-label" >{ value2 }</label>
          </div>
      </div>
    </form>
  )
}

export default BooleanRadioButton