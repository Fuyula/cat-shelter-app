import React from 'react';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import BooleanRadioButton from './BooleanRadioButton';
import PropTypes from 'prop-types';

const FilterSearchModal = ( { filters, setFilterByAge, filterByAge } ) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content container-fluid">
                    <div className="modal-header container-fluid">
                        <h1 className="display-6 text-center" id="exampleModalLabel">
                            Filter
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body container-fluid">
                        <form className="container-fluid d-flex flex-column justify-content-evenly mb-4">
                            <label className="form-label m-4 fw-semibold">
                                Age (years)
                            </label>
                            <TwoThumbInputRange 
                                onChange={(values) => setFilterByAge(values)} 
                                values={filterByAge} 
                                min={0} 
                                max={20} 
                                inputStyle={{ width: '220px', display: 'flex', flexDirection: 'column', alignSelf: 'center'}}
                                trackColor={'#adb5bd'}
                                thumbColor={'#000'}
                                labelStyle= {{ backgroundColor: '#adb5bd'}}
                            />
                        </form>
                        {
                            filters.map(( filter, index ) =>
                                {
                                return(
                                    <div key = {`filter ${ index }`} >
                                    <label className="form-label m-4 fw-semibold">
                                        { filter.name }
                                    </label>
                                    <BooleanRadioButton 
                                        option1 = { filter.option1 } 
                                        option2 = { filter.option2 } 
                                        value = { filter.value } 
                                        setValue = { filter.setValue } 
                                    />
                                    </div>
                                )
                                }
                            )
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-dark">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

FilterSearchModal.propTypes = {
    filters: PropTypes.array.isRequired,
    onValueChange: PropTypes.func.isRequired,
    filterByAge: PropTypes.array.isRequired,
}

export default FilterSearchModal