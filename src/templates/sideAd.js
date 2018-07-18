import React from 'react'
import PropTypes from 'prop-types'

export const SideAdTemplate = ({title, image, link}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <a href={link}>
                <img src={image} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SideAdTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
}

const SideAd = ({data}) => {
  const {markdownRemark: ad} = data

  return (
    <SideAdTemplate
      title={ad.frontmatter.title}
      image={ad.frontmatter.image}
      link={ad.frontmatter.link}
    />
  )
}

SideAd.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SideAd

export const SideAdQuery = graphql`
  query sideAd($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
        image,
        link
      }
    }
  }
`
