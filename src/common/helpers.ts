import sT from '@/common/commonStyles/tables.module.scss'

export const isEqualToMeId = (deckAuthorId: string, meId: string): boolean => deckAuthorId === meId

export const colorByAuthorId = (deckAauthorId: string, meId: string): 'white' | 'grey' =>
  isEqualToMeId(deckAauthorId, meId) ? 'white' : 'grey'

export const cursorByAuthorId = (deckAauthorId: string, meId: string) =>
  isEqualToMeId(deckAauthorId, meId) ? '' : sT.cursorAuto
