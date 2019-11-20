import React from 'react';
import PropTypes from 'prop-types';

import LoaderIcon from '<assets>/loader.svg';
import { StyledLoading, StyledSpinner, StyledLoadingText } from './style';

function Loader({ children, loading, type, text }) {
    if (children && !loading) return children;
    return (
        <StyledLoading type={type}>
            <StyledSpinner src={LoaderIcon} alt="Loading..." />
            <StyledLoadingText type={type}>{text}</StyledLoadingText>
        </StyledLoading>
    );
}

Loader.propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool,
    type: PropTypes.string,
    text: PropTypes.string
};
Loader.defaultProps = {
    children: null,
    loading: false,
    type: 'page',
    text: ''
};

export default React.memo(Loader);
