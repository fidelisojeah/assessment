/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const getSize = name => ({ theme, size }) => {
    const sizeTypes = {
        fontSize: {
            large: theme.fontSizes.xlarge,
            small: theme.fontSizes.smallish,
            normal: theme.fontSizes.medium
        },
        buttonHeight: {
            large: theme.buttonSizes.large,
            small: theme.buttonSizes.small,
            normal: theme.buttonSizes.normal
        },
        loadingHeight: {
            large: theme.fontSizes.h3,
            small: theme.fontSizes.medium,
            normal: theme.fontSizes.xxlarge
        },
        loadingWidth: {
            large: theme.fontSizes.h3,
            small: theme.fontSizes.medium,
            normal: theme.fontSizes.xxlarge
        }
    };
    return sizeTypes[name][size];
};

export const StyledButton = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    appearance: none;
    text-decoration: none;
    width: ${({ fullWidth, width }) => (fullWidth ? '100%' : (width && `${width}px`) || 'auto')};
    flex: ${({ fullWidth }) => (fullWidth ? '1 1 auto' : '0 0 auto')};
    max-width: 100%;
    background: ${({ secondary, theme, disabled }) =>
        secondary ? 'transparent' : disabled ? theme.palette.dark : theme.palette.primary};
    color: ${({ secondary, theme, disabled }) =>
        secondary ? (disabled ? theme.palette.dark : theme.palette.primary) : theme.palette.white};
    padding: ${({ theme }) => theme.buttonPadding.large};
    font-size: ${getSize('fontSize')};
    line-height: 1.4;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: all 0.15s ease-in-out !important;
    outline: 0;
    border-width: ${({ secondary }) => (!secondary ? 0 : '2px')};
    border-color: ${({ secondary, theme }) => (!secondary ? 'none' : theme.palette.primary)};
    &:hover {
        background: ${({ disabled, secondary, theme }) =>
            !disabled && (secondary ? theme.palette.primary : theme.colors.primaryHovered)};
        color: ${({ disabled, secondary, theme }) => !disabled && secondary && theme.palette.white};
    }
`;

export const StyledButtonContent = styled.div`
    ${({ isLoading }) => isLoading && 'visibility: hidden'};
    height: 100%;
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ secondary, theme }) => (secondary ? theme.palette.primary : theme.palette.white)}
    transition: background 0.2s ease-in-out;
    >svg {
        width: ${({ theme }) => theme.buttonSizes.small};
        height: ${({ theme }) => theme.buttonSizes.small};
    }
`;
