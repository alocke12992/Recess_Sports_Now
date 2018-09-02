import React from 'react';
import PropTypes from 'prop-types';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Content, {HTMLContent} from '../components/Content';
import ReadMore from '../components/ReadMore';
import {Title, Tile} from 'bloomer';
import PostShare from '../components/PostShare';
import Comments from '../components/Comments';

export const BlogPostTemplate = ({
  facebook,
  slug,
  exerpt,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  recentPosts,
  similarPosts,
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
                <div className="inline-share">
                  <div className="post-top share-this">Share This</div>
                  <PostShare slug={slug} title={title} exerpt={exerpt} />
                </div>
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p>
                <PostContent content={content} />
                <div className="inline-share">
                  <div className="post-top share-this">Share This</div>
                  <PostShare slug={slug} title={title} exerpt={exerpt} />
                </div>
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
                <div className="fb-comments" data-href="http://localhost:8000/blog/2022-07-05-this-is-a-test-blog/" data-numposts="5"></div>
                <div>
                  <Title>You Might Also Like</Title>
                  <Tile isAncestor>
                    <Tile isSize={12} isParent>
                      {/* {
                        similarPosts.map(post => {
                          return (
                            <div key={post.node.id} style={{margin: '0px 10px'}}>
                              <ReadMore post={post} />
                            </div>
                          )
                        })
                      } */}
                    </Tile>
                  </Tile>
                </div>
              </div>
              <div className="column is-3 is-offset-1">
                <Title>Popular Stories</Title>
                <Tile isAncestor>
                  <Tile isSize={12} isVertical isParent>
                    {/* {
                      recentPosts.map(post => {
                        return (
                          <div key={post.node.id} style={{margin: '15px 0px'}}>
                            <ReadMore post={post} />
                          </div>
                        )
                      })
                    } */}
                  </Tile>
                </Tile>
              </div>
              <Comments slug={slug} facebook={facebook} />
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
  facebook: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  recentPosts: PropTypes.array,
  similarPosts: PropTypes.array
}

const BlogPost = ({data}) => {
  const {singlePost: post} = data
  const {recentPosts: recentPosts} = data
  const {similarPosts: similarPosts} = data
  const {
    siteData: {
      siteMetadata: {
        facebook: {
          appId
        }
      }
    }
  } = data
  if (post.frontmatter.source) {
    return (
      <SamplePost
        source={post.frontmatter.source}
      />
    )
  } else {
    return (
      <BlogPostTemplate
        facebook={appId}
        slug={post.fields.slug}
        exerpt={post.exerpt}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} || Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        recentPosts={recentPosts.edges}
        similarPosts={similarPosts.edges}
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
      excerpt(pruneLength: 100)
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        source
      }
    }
    siteData: site {
      siteMetadata {
        facebook{
          appId
        }
      }
    }
    recentPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
      limit: 5
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            featuredImage
            title
            templateKey
          }
        }
      }
    }
    similarPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }},
      limit: 3
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            featuredImage
            title
            templateKey
            tags
          }
        }
      }
    }
  }
`
