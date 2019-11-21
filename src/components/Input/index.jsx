/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import {
    StyledField,
    Prefix,
    Suffix,
    InputContainer,
    StyledInput,
    StyledDropdownContainer
} from './style';

function InputComponent({ type, field, setFocus }) {
    switch (type) {
        case 'search':
            return (
                <StyledInput
                    onFocus={() => setFocus(true)}
                    type="search"
                    autoComplete="off"
                    autoFill="off"
                    autocorrect="off"
                    spellcheck="false"
                    {...field}
                    value={field.value || ''}
                />
            );
        default:
            return <StyledInput type="text" {...field} value={field.value || ''} />;
    }
}
InputComponent.propTypes = {
    type: PropTypes.string.isRequired,
    field: PropTypes.any.isRequired,
    setFocus: PropTypes.func.isRequired
};

function RenderMenu({ dropdownChildren, form, field, setFocus }) {
    const onClick = (event, value) => {
        event.preventDefault();
        form.setFieldValue(field.name, value);
        return setFocus(false);
    };

    if (Array.isArray(dropdownChildren)) {
        return dropdownChildren.map(eachChild => (
            <div
                key={eachChild.value}
                role="presentation"
                className="list"
                onClick={event => onClick(event, eachChild.label)}
            >
                <div className="city">
                    <div className="label nested">
                        {eachChild.value} {eachChild.label}
                    </div>
                </div>
            </div>
        ));
    }
    return dropdownChildren;
}

function InputField({
    error,
    prefix,
    onSuffixClick,
    suffix,
    disabled,
    dropdownChildren,
    form,
    field,
    ...props
}) {
    const [isFocused, setFocus] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        function handleMouseClick(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                return setFocus(false);
            }
            return 1;
        }
        document.addEventListener('mousedown', handleMouseClick, false);
        return function cleanup() {
            document.removeEventListener('mousedown', handleMouseClick, false);
        };
    });
    return (
        <div ref={inputRef} style={{ position: 'relative' }}>
            <StyledField component="div">
                <InputContainer disabled={disabled} hasError={!!error}>
                    {prefix && <Prefix>{prefix}</Prefix>}
                    <InputComponent
                        {...props}
                        field={field}
                        disabled={disabled}
                        setFocus={setFocus}
                    />
                    {suffix && <Suffix onClick={onSuffixClick}>{suffix}</Suffix>}
                </InputContainer>
            </StyledField>
            {dropdownChildren && isFocused && (
                <StyledDropdownContainer>
                    <RenderMenu
                        dropdownChildren={dropdownChildren}
                        form={form}
                        field={field}
                        setFocus={setFocus}
                    />
                </StyledDropdownContainer>
            )}
        </div>
    );
}
InputField.propTypes = {
    type: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    dropdownChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
    onSuffixClick: PropTypes.func,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    spaceAfter: PropTypes.bool,
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired
};
InputField.defaultProps = {
    error: '',
    type: 'text',
    suffix: null,
    disabled: false,
    spaceAfter: false,
    dropdownChildren: null,
    prefix: null,
    onSuffixClick: () => {}
};

function Input(props) {
    return <Field component={InputField} {...props} />;
}

Input.propTypes = {
    type: PropTypes.string,
    error: PropTypes.string
};
Input.defaultProps = { error: '', type: 'text' };

export default React.memo(Input);
