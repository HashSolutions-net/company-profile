import React from 'react';
import PropTypes from "prop-types";
import BlogClassicData from '../../data/blog/BlogClassic.json';
import BlogItem from '../../components/Blog/BlogItem';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const HomeBlog =({ SectionBgColor }) => {
    return (
        <div id='why-us-sec' className={`section section-padding-t90-b100 ${SectionBgColor}`}>
            <div className="container">
                <SectionTitle
                    title="Why Choose Us"
                    subTitle=""
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                        {BlogClassicData && BlogClassicData.slice(0, 3).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <BlogItem data={single} key={key} />
                                </div>
                            ); 
                        })}
                </div>
            </div>
        </div>
    )
}
HomeBlog.propTypes = {
    SectionBgColor: PropTypes.string
};
HomeBlog.defaultProps = {
    SectionBgColor: "section section-padding-t90-b100"
};

export default HomeBlog
