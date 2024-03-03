/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const SeoMetadata = ({ title, description, keywords }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
);

SeoMetadata.defaultProps = {
    title: "Online Shopping - Flipkart",
    description: "Flipkart Clone by Suraj Darade",
    keywords: ["latestui", "flipkart-clone", "flipkart", "mern", "payment"],
};

export default SeoMetadata;
