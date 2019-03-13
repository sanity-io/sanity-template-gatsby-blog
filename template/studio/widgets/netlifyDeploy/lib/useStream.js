import {createEventHandler} from 'react-props-stream'
import {startWith} from 'rxjs/operators'

export function useStream (initialValue) {
  const [stream, next] = createEventHandler()
  return [stream.pipe(startWith(initialValue)), next]
}
