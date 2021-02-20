import React from 'react'
import resumeData from '../data/experince'
import { ExperienceEntry } from '../utils/pageTypes'
import {
  ActionType,
  ResumeActions,
  ResumeCtxActionTypes,
  ResumePageType,
  ResumeViewModes
} from './types'

const MAX_LITE_ITEMS = 3

const getLiteWorkplaces = (workplaces: ExperienceEntry[], limit: number) => {
  console.log('mata', workplaces.slice(0, limit))

  return workplaces
    .slice(limit, workplaces.length)
    .reduce((acc, wp: ExperienceEntry) => {
      const newEntry = {
        company: wp.company,
        startDate: wp.startDate,
        endDate: wp.endDate
      }
      return [...acc, newEntry]
    }, [])
}

const initialState = {
  workplaces: resumeData,
  liteMaxItems: MAX_LITE_ITEMS,
  liteWorkplaces: getLiteWorkplaces(resumeData, MAX_LITE_ITEMS),
  mode: ResumeViewModes.LITE
}

const setViewMode = function setViewMode(payload: ResumeViewModes, state) {
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
      dispatch({ type: ResumeCtxActionTypes.SET_MODE as any, payload: mode })
    }
  }
}

const reducer = (state: ResumePageType, action: ActionType) => {
  const { type, payload } = action
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

  console.log('here', { state })

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
