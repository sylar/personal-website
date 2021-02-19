import { ReadSyncOptions } from 'fs'
import React, { Dispatch } from 'react'
import resumeData from '../data/experince'
import {
  ActionType,
  ResumeActions,
  ResumeCtxActionTypes,
  ResumePageType,
  ResumeViewModes
} from './types'

const initialState = {
  workplaces: resumeData,
  liteMaxItems: 3,
  mode: ResumeViewModes.LITE
}

const setViewMode = function setViewMode(payload: ResumeViewModes, state) {
  console.log('rer')
  return {
    ...state,
    mode: payload
  }
}

const actionsMap = {
  [ResumeCtxActionTypes.SET_MODE]: setViewMode
}

const actions: ResumeActions = {
  [ResumeCtxActionTypes.SET_MODE]: function setModeAction(
    mode: ResumeViewModes
  ) {
    return (dispatch: React.Dispatch<ActionType>) => {
      console.log('in dispatch')
      dispatch({ type: ResumeCtxActionTypes.SET_MODE as any, payload: mode })
    }
  }
}

const reducer = (state: ResumePageType, action: ActionType) => {
  const { type, payload } = action
  console.log('in reducer', actionsMap[type])
  const newState = actionsMap[type] ? actionsMap[type](payload, state) : state

  return newState
}

export const ResumeContext = React.createContext({
  state: initialState,
  actions,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {}
} as {
  state: typeof initialState
  actions: ResumeActions
  dispatch: React.Dispatch<ActionType>
})

const ResumeProvider = React.memo(({ children }: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [enchancedActions, setEnchancedActions] = React.useState({})
  const stateRef = React.useRef()

  React.useEffect(() => {
    Object.keys(actionsMap).forEach((key) =>
      setEnchancedActions((e) => ({
        ...e,
        [key]: (...args) => {
          actions[key](...args)(dispatch, stateRef.current)
        }
      }))
    )
  }, [])

  React.useEffect(() => {
    stateRef.current = state
  }, [state])

  console.log('here', { enchancedActions })

  return (
    <ResumeContext.Provider
      value={{
        state,
        dispatch,
        actions: enchancedActions as any
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useResumeCxt = () => {
  const ctx = React.useContext(ResumeContext)
  return ctx
}
export default ResumeProvider
