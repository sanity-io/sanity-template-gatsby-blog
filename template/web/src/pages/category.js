import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'

import {responsiveTitle1} from '../components/typography.module.css'

// Add “posts” to the GraphQL query
export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: {eq: $id}) {
      title
      description
      slug {
        current
      }
      posts {
        id
        publishedAt
        mainImage {
          ...SanityImage
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
`
const CategoryPostTemplate = props => {
  const {data = {}, errors} = props
  const {title, description, posts} = data.category || {}

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <h1 className={responsiveTitle1}>{title}</h1>
        <p>{description}</p>
        {posts && posts.length > 0 && <BlogPostPreviewGrid nodes={posts} />}
      </Container>
    </Layout>
  )
}

export default CategoryPostTemplate
