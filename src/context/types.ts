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
  SWITCH_MODE = 'SWITCH_MODE',
  GET_WORKPLACES_LIST = 'GET_WORKPLACES_LIST'
}

export type ActionType = {
  type: ResumeCtxActionTypes
  payload?: ResumeViewModes
}

export type ResumeActions = {
  [ResumeCtxActionTypes.SWITCH_MODE]: (
    mode: ResumeViewModes
  ) => (dispatch: React.Dispatch<ActionType>) => void
}
