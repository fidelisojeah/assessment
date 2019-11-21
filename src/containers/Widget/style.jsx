/* eslint-disable indent */
import styled, { css } from 'styled-components';
import opacity from 'polished/lib/color/opacify';

export const Wrapper = styled.div`
    line-height: 1.4;
    width: 100%;
    padding: 32px;
`;

export const WidgetComponent = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
`;

export const FormContainer = styled.div`
    padding: 26px 8px 26px 8px;
    background: ${({ theme }) => opacity(0.6, theme.palette.black)};
`;

export const FormRow = styled.div`
    display: flex;
    ${({ theme }) =>
        theme.media.tablet(
            css`
                flex-direction: column;
            `
        )}
`;

export const FormColumn = styled.div`
    flex: 1;
    ${({ noMarg, theme }) =>
        noMarg
            ? css`
                  margin: 10px 0;
                  ${theme.media.tablet(
                      css`
                          margin: 10px;
                      `
                  )}
              `
            : css`
                  margin: 10px;
              `}
`;
