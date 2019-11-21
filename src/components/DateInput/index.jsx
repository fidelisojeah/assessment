import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { InputContainer, Prefix, StyledInput } from '../Input/style';

import { ReactComponent as CalendarIcon } from '<assets>/calendar.svg';

function CustomDateInput({ ...props }, ref) {
    return <StyledInput type="text" autoComplete="off" autoFill="off" ref={ref} {...props} />;
}

const CustomInput = forwardRef(CustomDateInput);

function DateInputComponent({ form, hasReturn, disabled, hasPrefix }) {
    return (
        <InputContainer disabled={disabled}>
            <div className="date-picker">
                {hasPrefix && (
                    <Prefix>
                        <CalendarIcon />
                    </Prefix>
                )}
                <DatePicker
                    selected={form.values.departureDate}
                    onChange={date => form.setFieldValue('departureDate', date)}
                    selectsStart={hasReturn}
                    startDate={form.values.departureDate}
                    disabledKeyboardNavigation
                    dateFormat="dd MMM"
                    minDate={new Date()}
                    monthsShown={2}
                    customInput={<CustomInput />}
                    endDate={form.values.returnDate}
                />
            </div>
            <div className="date-picker">
                {hasPrefix && (
                    <Prefix>
                        <CalendarIcon />
                    </Prefix>
                )}
                <DatePicker
                    selected={form.values.returnDate}
                    onChange={date => form.setFieldValue('returnDate', date)}
                    dateFormat="dd MMM"
                    placeholderText="RETURN"
                    selectsEnd
                    startDate={form.values.departureDate}
                    disabled={!hasReturn}
                    disabledKeyboardNavigation
                    minDate={form.values.departureDate || new Date()}
                    monthsShown={2}
                    customInput={<CustomInput />}
                    endDate={form.values.returnDate}
                    rangeisEnd
                />
            </div>
        </InputContainer>
    );
}

DateInputComponent.propTypes = {
    hasReturn: PropTypes.bool,
    hasPrefix: PropTypes.bool,
    disabled: PropTypes.bool,
    form: PropTypes.shape({
        values: PropTypes.object,
        setFieldValue: PropTypes.func
    }).isRequired
};
DateInputComponent.defaultProps = {
    hasReturn: true,
    hasPrefix: true,
    disabled: false
};

function DateInput(props) {
    return <Field component={DateInputComponent} {...props} />;
}

export default React.memo(DateInput);
