import { ExperienceEntry } from '../utils/pageTypes'

export type ResumePageType = {
  lightDetails: {
    top: ExperienceEntry[]
    rest: Pick<ExperienceEntry, 'company'>[]
  }
  all: ExperienceEntry[]
  mode: ResumeViewModes
}

export enum ResumeViewModes {
  LITE = 'LITE',
  FULL = 'FULL'
}

export enum ResumeCtxActionTypes {
  SET_MODE = 'SET_MODE',
  GET_WORKPLACES_LIST = 'GET_WORKPLACES_LIST'
}

export type ActionType = {
  type: ResumeCtxActionTypes
  payload: ResumeViewModes
}

export type ResumeActions = {
  [ResumeCtxActionTypes.SET_MODE]: (
    mode: ResumeViewModes
  ) => (dispatch: React.Dispatch<ActionType>) => void
}
