import React from 'react'
import {graphql} from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../components/layout'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'

export const query = graphql`
  query($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      title
      slug {
        current
      }
      bodyRaw
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && <SEO title={post.title || 'Untitled'} />}

      {errors && <GraphQLErrorList errors={errors} />}
      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
