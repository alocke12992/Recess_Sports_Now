import React from 'react';
import PropTypes from 'prop-types';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, {HTMLContent} from '../components/Content';
import LikePost from '../components/LikePost';
import {Title} from 'bloomer';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  likePosts,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-8">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p>
                <PostContent content={content} />
                {tags && tags.length ? (
                  <div style={{marginTop: `4rem`}}>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="column is-3 is-offset-1">
                <Title>Popular Stories</Title>
                <LikePost likePosts={likePosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const SamplePost = ({source}) => {
  return (
    <iframe src={source} style={{height: '100vh', width: "100%"}} />
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  likePosts: PropTypes.array,
}

const BlogPost = ({data}) => {
  const {singlePost: post} = data
  const {likePosts: likePosts} = data
  if (post.frontmatter.source) {
    return (
      <SamplePost
        source={post.frontmatter.source}
      />
    )
  } else {
    return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} || Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        likePosts={likePosts.edges}
      />
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!){
    singlePost: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        source
      }
    }
    likePosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
      limit: 5
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            featuredImage
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featured
            carousel
            tags
          }
        }
      }
    }
  }
`
