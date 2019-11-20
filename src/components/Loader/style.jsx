import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
    100% { transform: rotate(360deg); }
`;

export const StyledLoading = styled.div`
    position: ${({ type }) => type === 'button' && 'absolute'};
    top: ${({ type }) => type === 'button' && '0'};
    width: ${({ type }) => type === 'button' && '100%'};
    left: 0;
    height: 100%;
    padding: 12px;
    display: flex;
    flex-direction: ${({ type }) => (type === 'page' ? 'column' : 'row')};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
`;

export const StyledLoadingText = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.palette.primary};
    line-heigh: '21px';
    margin-top: ${({ type }) => type === 'page' && '16px'};
    margin-left: ${({ type }) => type !== 'page' && '12px'};
`;

export const StyledSpinner = styled.img`
    width: 140px
    height: 140px;
    animation: ${SpinnerAnimation} 1.75s linear infinite;
`;

export const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
