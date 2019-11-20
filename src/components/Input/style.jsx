import React from 'react';
import styled, { css } from 'styled-components';

export const StyledField = styled(({ component: Component, className, children, ...props }) => (
    <Component className={className} {...props}>
        {children}
    </Component>
))`
    position: relative;
    display: block;
    flex: 1 1 100%;
    width: 100%;
    margin-bottom: ${({ spaceAfter }) => spaceAfter && '24px'};
    z-index: 41;
    ${({ disabled, theme }) =>
        disabled &&
        css`
            background: ${theme.palette.dark};
            color: ${theme.palette.white};
        `}
`;

export const InputContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
    ${({ hasError, theme }) =>
        hasError &&
        css`
            border: 1px solid ${theme.colors.error};
        `}
        .react-datepicker{
            font-family: 'Open Sans', Arial;
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            border: 1px solid #cccccc;
            border-radius: 0;
            padding: 15px 5px;
            box-shadow: {({theme})=>theme.shadows.small};
        }
        .react-datepicker__month-container{
            margin: 0 5px;
        }
    .react-datepicker-popper {
        z-index: 60;
    }
    .react-datepicker__input-container {
        height: 40px;
    }
    .react-datepicker-wrapper {
        width: 100%;
    }
    .react-datepicker__triangle {
        display: none;
    }
    .react-datepicker__day{
        margin: 2px 0;
        border-radius: 0;
    }
    .react-datepicker__header{
        background-color: #ffffff;
    }
    .react-datepicker__day--in-range,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-selecting-range:hover {
        background: ${({ theme }) => theme.palette.light};
        color: #000000;
    }
    .react-datepicker__day--selected,
    .react-datepicker__day--range-start,
    .react-datepicker__day--selecting-range-start,
    .react-datepicker__day--selecting-range-start:hover,
    .react-datepicker__day--range-end {
        background: ${({ theme }) => theme.palette.primary};
        color: ${({ theme }) => theme.palette.white};
        font-weight: bold;
    }
    .react-datepicker__day--range-start,
    .react-datepicker__day--selecting-range-start,
    .react-datepicker__day--selecting-range-start:hover
     {
        border-radius: 6px 0 0 6px;
    }
    .react-datepicker__day--range-end,
    .react-datepicker__day--selecting-range-end ,
    .react-datepicker__day--selecting-range-end:hover
    {
        border-radius: 0 6px 6px 0;
    }

`;

export const StyledInlineLabel = styled.div`
    height: 100%;
    color: ${({ theme }) => theme.palette.dark};
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    z-index: 42;
    padding: 6px 0 8px 6px;
`;

export const Prefix = styled.div`
    color: ${({ theme }) => theme.palette.dark};
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    padding: 6px 0 8px 6px;
    z-index: 42;
    position: absolute;
    justify-content: center;
    > svg,
    > i {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.palette.dark};
    }
`;

export const Suffix = styled.div`
    color: ${({ theme }) => theme.palette.dark};
    height: 44px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    pointer-events: ${({ disabled }) => disabled && 'none'};
    padding: 6px 0 8px 6px;
    z-index: 42;
    > svg,
    > i {
        width: 38px;
        height: 38px;
        color: ${({ theme }) => theme.palette.dark};
    }
`;

export const StyledInput = styled.input`
    border: none;
    appearance: none;
    font-size: inherit;
    -webkit-text-fill-color: ${({ disabled }) => disabled && 'inherit'};
    color: inherit;
    background-color: #f9f9f9;
    cursor: inherit;
    flex: 1 1 20%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    min-width: 0;
    z-index: 41;
    letter-spacing: 2px;
    &:focus,
    &:active {
        outline: none;
        border: none;
        box-shadow: 0 0 5px 2px ${({ theme }) => theme.palette.dark};
    }
`;

export const StyledDropdownContainer = styled.div`
    ${'' /* overflow-x: hidden; */}
    overflow-y: auto;
    line-height: 1.2;
    max-height: 375px;
    background: ${({ theme }) => theme.palette.white};
    width: 100%;
    position: absolute;
    z-index: 45;
    left: 0px;
    border-radius: 2px;
    transition: opacity 0.1s ease;
    box-shadow: ${({ theme }) => theme.shadows.evident};
    .list {
        padding: 14px 10px;
        line-height: 1.2;
        position: relative;
        margin: 0;
        min-height: 48px;
        display: flex;
        align-items: center;
        .city {
            display: table-cell;
            width: 100%;
        }
        .label {
            position: relative;
            &.nested {
                margin-left: 20px;
                padding-left: 10px;
                width: calc(100% - 20px);
            }
        }
        &:hover {
            color: ${({ theme }) => theme.palette.white};
            background: ${({ theme }) => theme.palette.primary};
        }
    }
`;
