import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledButtonContent, IconContainer } from './style';

function Button({
    onClick,
    loading,
    leftIcon,
    secondary,
    children,
    rightIcon,
    fullWidth,
    width,
    disabled,
    className
}) {
    return (
        <StyledButton
            className={className}
            onClick={onClick}
            secondary={secondary}
            disabled={disabled}
            width={width}
            fullWidth={fullWidth}
        >
            {loading && null}
            <StyledButtonContent loading={loading}>
                {leftIcon && <IconContainer secondary={secondary}>{leftIcon}</IconContainer>}
                <div style={{ display: 'inline-block' }}>{children}</div>
                {rightIcon && (
                    <IconContainer secondary={secondary} right>
                        {rightIcon}
                    </IconContainer>
                )}
            </StyledButtonContent>
        </StyledButton>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    width: PropTypes.number,
    className: PropTypes.string,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    secondary: PropTypes.bool
};
Button.defaultProps = {
    onClick: () => {},
    leftIcon: null,
    rightIcon: null,
    width: 0,
    secondary: false,
    disabled: false,
    fullWidth: false,
    loading: false,
    className: ''
};
export default React.memo(Button);
