import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Bounce, Flip } from 'react-toastify';

export default function ToastContainerFn({
    position,
    autoClose,
    hideProgressBar,
    newestOnTop,
    closeOnClick,
    rtl,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
    transition,
    closeButton,
    icon
}) {
    return (
        <ToastContainer
            position={position}
            autoClose={autoClose}
            hideProgressBar={hideProgressBar}
            newestOnTop={newestOnTop}
            closeOnClick={closeOnClick}
            rtl={rtl}
            pauseOnFocusLoss={pauseOnFocusLoss}
            draggable={draggable}
            pauseOnHover={pauseOnHover}
            transition={transition}
            closeButton={closeButton}
            icon={icon}
        >
        </ToastContainer>
    );
}

ToastContainerFn.propTypes = {
    position: PropTypes.string,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    pauseOnFocusLoss: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    draggable: PropTypes.bool,
    icon: PropTypes.bool,
    closeButton: PropTypes.bool,
    rtl: PropTypes.bool,
    transition: PropTypes.node,
};

ToastContainerFn.defaultProps = {
    position: "top-center",
    transition: Flip,
    rtl: false,
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    closeOnClick: true,
    newestOnTop: false,
    draggable: true,
    icon: false,
    closeButton: false
};
