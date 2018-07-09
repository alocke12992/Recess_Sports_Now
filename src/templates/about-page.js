import React from 'react'
import PropTypes from 'prop-types'
import Content, {HTMLContent} from '../components/Content'

export const AboutPageTemplate = ({link, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <iframe src={link} style={{height: '100vh', width: "100%"}}></iframe>
  )
}

AboutPageTemplate.propTypes = {
  link: PropTypes.string.isRequired,
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <AboutPageTemplate
      link={post.frontmatter.link}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        link
      }
    }
  }
`
