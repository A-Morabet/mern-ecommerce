import { Helmet } from "react-helmet-async"


function Meta({ title, description, keywords }) {
  return (
    <Helmet>
        <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to Greenosaur',
    description: 'Jurassic Clothing. Everywhere',
    keywords: 'clothing, buy dinosaur clothing, cheap dinosaur clothing',
}

export default Meta
