import {withPropsStream} from 'react-props-stream'
import NetlifyDeploy from './NetlifyDeploy'
import {toPropsStream} from './props'

const NetlifyDeployContainer = withPropsStream(toPropsStream, NetlifyDeploy)

export default {
  name: 'netlify-deploy',
  component: NetlifyDeployContainer,
  layout: {width: 'medium'}
}
