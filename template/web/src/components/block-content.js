import clientConfig from '../../client-config'
import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

const BlockContent = ({blocks}) => <BaseBlockContent blocks={blocks} {...clientConfig.sanity} />

export default BlockContent
