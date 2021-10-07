import React from "react";
import PropTypes from "prop-types";

const ButtonLoader = props => {

    const loading = props.isLoading;

    return (
        <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
            <div className="btn-label">
                {!loading && (
                    <i
                        className="fa fa-sign-in"
                        style={{marginRight: "5px"}}
                    />
                )}
                {!loading && <span>Login</span>}
                {loading && (
                    <i
                        className="fa fa-refresh fa-spin"
                        style={{marginRight: "5px"}}
                    />
                )}
                {loading && <span>Login</span>}
            </div>
        </button>
    );
}

export default ButtonLoader

ButtonLoader.propTypes = {
    isLoading: PropTypes.bool
}
