import React from 'react'
import {graphql} from 'gatsby'

import BlogPostPreview from '../components/blog-post-preview'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
      description
      keywords
    }

    posts: allSanityPost(limit: 4) {
      edges {
        node {
          id
          title
          excerptRaw
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = data && data.site
  const postEdges = data && data.posts && data.posts.edges

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <h2>Latest blog posts</h2>
      <ul>
        {postEdges.map(({node}) => (
          <li key={node.id}>
            <BlogPostPreview {...node} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
