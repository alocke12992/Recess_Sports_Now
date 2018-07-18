import React from 'react'
import Helmet from 'react-helmet'
import Content, {HTMLContent} from '../components/Content'

export const AdTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
  link
}) => {
  const AdContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <img src={image} />
            <AdContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Ad = ({data}) => {
  const {markdownRemark: ad} = data
  return (
    <AdTemplate
      content={ad.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${ad.frontmatter.title} | Ad`} />}
      title={ad.frontmatter.title}
      image={ad.frontmatter.image}
      link={ad.frontmatter.link}
    />
  )
}

export default Ad

export const pageQuery = graphql`
  query AdByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        image
        link
      }
    }
  }
`