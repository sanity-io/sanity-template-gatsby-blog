import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import React from 'react'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>
  }
}

const PortableText = ({blocks}) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default PortableText
