import {withPropsStream} from 'react-props-stream'
import ProjectInfoWidget from './ProjectInfoWidget'
import {toPropsStream} from './props'

export default {
  name: 'dev/project-info',
  component: withPropsStream(toPropsStream, ProjectInfoWidget),
  layout: {width: 'medium'}
}
