import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledButtonContent, IconContainer } from './style';

function Button({
    onClick,
    isLoading,
    leftIcon,
    secondary,
    children,
    rightIcon,
    size,
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
            size={size}
        >
            {isLoading && null}
            <StyledButtonContent isLoading={isLoading}>
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
    size: PropTypes.string,
    isLoading: PropTypes.bool,
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
    size: 'large',
    secondary: false,
    disabled: false,
    fullWidth: false,
    isLoading: false,
    className: ''
};
export default React.memo(Button);
