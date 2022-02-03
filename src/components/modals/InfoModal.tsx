import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="K" />
        <Cell value="S" />
        <Cell value="M" />
        <Cell value="F" />
      </div>
      <p className="text-sm text-gray-500">
        The letter ㅎ is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="L" />
        <Cell value="F" status="present" />
        <Cell value="R" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500">
        The letter ㄹ is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="H" />
        <Cell value="F" />
        <Cell value="M" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500">
        The letter ㅡ is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
