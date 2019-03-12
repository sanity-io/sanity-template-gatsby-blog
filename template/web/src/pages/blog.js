import React from 'react'
import {graphql, Link} from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query {
    posts: allSanityPost {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postEdges = data && data.posts && data.posts.edges

  return (
    <Layout>
      <SEO title='Blog' />
      <h1>Blog</h1>

      <ul>
        {postEdges.map(({node}) => (
          <li key={node.id}>
            <Link to={`/blog/${node.slug.current}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <Link to='/'>Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPage
