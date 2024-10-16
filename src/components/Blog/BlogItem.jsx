import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
    return (
        <div className="blog">
            <div className="thumbnail">
                <Link to='' className="image"><img style={{ cursor: 'default' }} src={process.env.PUBLIC_URL + data.image} alt="why_us" /></Link>
            </div>
            <div className="info">
                <h3 className="title">{data.title}</h3>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    data: PropTypes.object
};

export default BlogItem
