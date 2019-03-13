import {createEventHandler} from 'react-props-stream'
import {combineLatest, merge, of} from 'rxjs'
import {map, scan} from 'rxjs/operators'
import {useStream} from './lib/useStream'
import mockData from './mockData'

function reducer (state, action) {
  console.log(action)
  switch (action.type) {
    case 'settingsDialog/visible':
      return {...state, showSettingsDialog: action.value}
    case 'sites/set':
      return {...state, sites: action.data}
    default:
      return state
  }
}

export function toPropsStream (props$) {
  const [onDeploy$, onDeploy] = createEventHandler()
  const [showSettingsDialog$, setShowSettingsDialog] = useStream(false)
  const sitesSetAction$ = of({type: 'sites/set', data: mockData.sites})
  const onDeployAction$ = onDeploy$.pipe(map(id => ({type: 'sites/deploy', id})))
  const settingsDialogVisibleAction$ = showSettingsDialog$.pipe(
    map(value => ({type: 'settingsDialog/visible', value}))
  )
  const action$ = merge(sitesSetAction$, settingsDialogVisibleAction$, onDeployAction$)
  const state$ = action$.pipe(scan(reducer, {showSettingsDialog: false, sites: []}))

  return combineLatest(props$, state$).pipe(
    map(([props, state]) => ({
      ...props,
      ...state,
      onDeploy,
      onOpenSettingsDialog: () => setShowSettingsDialog(true),
      onCloseSettingsDialog: () => setShowSettingsDialog(false)
    }))
  )
}
