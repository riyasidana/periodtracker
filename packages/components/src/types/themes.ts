export type ThemeName = 'hills' | 'mosaic' | 'village' | 'desert'
export type AvatarName = 'oky' | 'julia' | 'nur' | 'ari' | 'pihu' | 'shiko' | 'kuku'

export interface Theme {
  id: ThemeName
  primaryBackgroundColor: string
  periodColor: string
  periodNotVerifiedColor: string
  nonPeriodColor: string
  fertileColor: string
  fontSize: number
  lightGreen: string
  mediumGreen: string
}

export type Themes = { [key in ThemeName]: Theme }
