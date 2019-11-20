import styled from 'styled-components';
import opacity from 'polished/lib/color/opacify';

export const Wrapper = styled.div`
    line-height: 1.4;
    width: 100%;
    padding: 24px;
`;

export const WidgetComponent = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
`;

export const FormContainer = styled.div`
    padding: 16px 8px 8px 8px;
    background: ${({ theme }) => opacity(0.6, theme.palette.black)};
`;

export const FormRow = styled.div`
    display: flex;
`;

export const FormColumn = styled.div`
    flex: 1;
    margin: 5px;
`;
