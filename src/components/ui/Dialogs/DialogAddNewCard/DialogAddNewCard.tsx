import {ChangeEvent, Dispatch, SetStateAction, useCallback, useRef, useState} from 'react'

import {zodResolver} from '@hookform/resolvers/zod'
import Cropper, {Area, Point} from 'react-easy-crop'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import s from './DialogAddNewCard.module.scss'

import {Button} from '@/components/ui/Button'
import {ControlledTextField} from '@/components/ui/controlled/controlled-text-field'
import sC from '@/components/ui/Dialogs/DialogsCommon.module.scss'
import {DialogsCommon} from '@/components/ui/Dialogs/DialogsCommon.tsx'
import {Select} from '@/components/ui/Select'
import {SliderSingle} from '@/components/ui/SliderSingle/SliderSingle.tsx'
import {Typography} from '@/components/ui/Typography'
import {useCreateCardInDeckMutation} from '@/services/decks/decks.service.ts'
import imgUpload from '@/assets/icons/imgUpload.svg'
import sT from "@/common/commonStyles/tables.module.scss"
import {fromBase64, onCrop, onFileChange} from "@/components/ui/Dialogs/DialogAddNewCard/cropFunctions.ts"
import {CropType} from "@/components/ui/Dialogs/DialogAddNewCard/CropTypes.ts"

export const DialogAddNewCard = (props: PropsType) => {
  const minSliderValue = 4
  const maxSliderValue = 15
  const sliderStep = 1
  const canvaWidth = 484
  const canvaHeight = 119

  const [value, setValue] = useState('Text') // for select
  const [inputQuestionImg, setInputQuestionImg] = useState<undefined | string>(undefined)
  const [inputAnswerImg, setInputAnswerImg] = useState<undefined | string>(undefined)
  const arr: Array<string> = ['Text', 'Picture'] // for select
  const [cropQuestion, setCropQuestion] = useState<Point>({x: 0, y: 0}) // for img upload
  const [cropAnswer, setCropAnswer] = useState<Point>({x: 0, y: 0}) // for img upload
  const [zoomQuestion, setZoomQuestion] = useState(minSliderValue) // for img upload
  const [zoomAnswer, setZoomAnswer] = useState(minSliderValue) // for img upload
  const [cropQuestionArea, setCropQuestionArea] = useState<null | CropType>(null) // for img upload
  const [cropAnswerArea, setCropAnswerArea] = useState<null | CropType>(null) // for img upload
  const [cropQuestionImg, setCropQuestionImg] = useState<string | undefined>(undefined)
  const [cropAnswerImg, setCropAnswerImg] = useState<string | undefined>(undefined)
  const [sliderQuestionValue, setSliderQuestionValue] = useState<number[]>([minSliderValue])
  const [sliderAnswerValue, setSliderAnswerValue] = useState<number[]>([minSliderValue])
  const [isEditQuestionPicture, setIsEditQuestionPicture] = useState(false)
  const [isEditAnswerPicture, setIsEditAnswerPicture] = useState(false)

  const schema = z.object({
    answer: z.string().min(3),
    question: z.string().min(3),
  })

  type FormValues = z.input<typeof schema>

  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      answer: '',
      question: '',
    },
  })
  const [createCardInDeck] = useCreateCardInDeckMutation()

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleFormSubmitted = handleSubmit(values => {
    onAddNewCard(values.question, values.answer)
    reset()
    props.setOpen(false)
  })

  // on submit form emulation
  const onSubmitEmulation = () => {
    if (!formRef.current) return
    formRef.current.submit = handleFormSubmitted
    formRef.current.submit()
  }


  const onAddNewCard = async (question: string, answer: string) => {
    if (!question || !answer || !props.deckId) return
    const formData = new FormData()
    const questionImg = await fromBase64( cropQuestionImg ? cropQuestionImg : '')
    const answerImg = await fromBase64( cropAnswerImg ? cropAnswerImg : '')

    formData.append('question', question)
    formData.append('answer', answer)
    if (questionImg) {
      formData.append('questionImg', questionImg)
    }
    if (answerImg) {
      formData.append('answerImg', answerImg)
    }
    createCardInDeck({
      deckId: props.deckId,
      formData
    })
    props.setOpen(false)
  }

  const onClose = () => {
    reset()
    setCropQuestionImg(undefined)
    setCropAnswerImg(undefined)
    props.setOpen(false)
  }

  const setDialogVariantCallback = (value: string) => {
    setValue(value)
  }

  const onCropQuestionComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCropQuestionArea({
        x: croppedAreaPixels.x,
        y: croppedAreaPixels.y,
        width: croppedAreaPixels.width,
        height: croppedAreaPixels.height
      })
    },
    []
  )

  const onCropAnswerComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCropAnswerArea({
        x: croppedAreaPixels.x,
        y: croppedAreaPixels.y,
        width: croppedAreaPixels.width,
        height: croppedAreaPixels.height
      })
    },
    []
  )

  const onFileQuestionChangeCallback = async (e: ChangeEvent<HTMLInputElement>) => {
    await onFileChange(e, setInputQuestionImg)
  }

  const onFileAnswerChangeCallback = async (e: ChangeEvent<HTMLInputElement>) => {
    await onFileChange(e, setInputAnswerImg)
  }

  const sliderQuestionChangeHandler = (newValue: number[]) => {
    setZoomQuestion(newValue[0])
    setSliderQuestionValue(newValue)
  }

  const sliderAnswerChangeHandler = (newValue: number[]) => {
    setZoomAnswer(newValue[0])
    setSliderAnswerValue(newValue)
  }

  const onCropQuestionChange = (location: Point) => {
    setCropQuestion(location)
  }

  const onCropAnswerChange = (location: Point) => {
    setCropAnswer(location)
  }

  function onZoomQuestionChange(value: number) {
    setZoomQuestion(value)
    setSliderQuestionValue([value])
  }

  function onZoomAnswerChange(value: number) {
    setZoomAnswer(value)
    setSliderAnswerValue([value])
  }

  function onApproveQuestion() {
    setIsEditQuestionPicture(false)
    onCrop(cropQuestionArea, inputQuestionImg, canvaWidth, canvaHeight, setCropQuestionImg)
      .then()
  }

  function onApproveAnswer() {
    setIsEditAnswerPicture(false)
    onCrop(cropAnswerArea, inputAnswerImg, canvaWidth, canvaHeight, setCropAnswerImg)
      .then()
  }

  return (
    <DialogsCommon
      title={'Add New Card'}
      open={props.open}
      setOpen={onClose}
      onButtonAction={onSubmitEmulation}
      actionButtonText={'Add New Card'}
      isButtonDisable={Object.keys(errors).length > 0}
    >
      <div className={sC.DialogDescription}>
        <div className={sC.dialogElement}>
          <Select
            options={arr}
            onChangeOption={setDialogVariantCallback}
            label={'Choose a question format'}
            isGreyColor={true}
            name={'dialogSelect'}
            value={value}
          />
        </div>
        {value === 'Text' ? (
          <>
            <form ref={formRef}>
              <div className={sC.textFieldContainer}>
                <div className={sC.element}>
                  <ControlledTextField
                    name={'question'}
                    placeholder={'type a question'}
                    label={'Question'}
                    control={control}
                  />
                </div>
              </div>
              <div className={sC.textFieldContainer}>
                <div className={sC.element}>
                  <ControlledTextField
                    name={'answer'}
                    placeholder={'type an answer'}
                    label={'Answer'}
                    control={control}
                  />
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <Typography variant={'Body_2'}>Question:</Typography>
            {
              !isEditQuestionPicture
                ? <>
                  {!cropQuestionImg
                    ? <div className={s.dummyQuestionAnswer}>Plz select question img</div>
                    : <div className={s.imgContainer}><img className={s.croppedImg} src={cropQuestionImg} alt="cropImg"/></div>
                  }
                  <Button variant="secondary" onClick={() => {
                    setIsEditQuestionPicture(true)
                  }} className={s.button}>
                    <img src={imgUpload} alt="trashIcon" className={sT.trashIcon}/>
                    Change cover
                  </Button>
                </>
                : <>
                  {(!cropQuestionImg || isEditQuestionPicture) && <input type="file" accept=".jpg, .jpeg, .png" onChange={onFileQuestionChangeCallback}/>}
                  {inputQuestionImg
                    ? <>
                      <div className={s.imgContainer}>
                        <Cropper
                          image={inputQuestionImg}
                          crop={cropQuestion}
                          zoom={zoomQuestion}
                          cropSize={{width: canvaWidth, height: canvaHeight}}
                          onCropChange={onCropQuestionChange}
                          onCropComplete={onCropQuestionComplete}
                          onZoomChange={onZoomQuestionChange}
                          minZoom={minSliderValue}
                          maxZoom={maxSliderValue}
                          zoomSpeed={sliderStep * 2}
                        />
                      </div>
                      <SliderSingle
                        defaultValue={minSliderValue}
                        min={minSliderValue}
                        max={maxSliderValue}
                        step={sliderStep}
                        value={sliderQuestionValue[0]}
                        onValueChange={sliderQuestionChangeHandler}
                      />
                      <Button onClick={onApproveQuestion}>Approve</Button>
                    </>
                    : <>
                      <div className={s.dummyQuestionAnswer}>Plz select question img</div>
                    </>
                  }
                </>
            }

            <Typography variant={'Body_2'}>Answer:</Typography>
            {
              !isEditAnswerPicture
              ? <>
                  {!cropAnswerImg
                    ? <div className={s.dummyQuestionAnswer}>Plz select question img</div>
                    : <div className={s.imgContainer}><img className={s.croppedImg} src={cropAnswerImg} alt="cropImg"/></div>
                  }
                  <Button variant="secondary" onClick={() => {
                    setIsEditAnswerPicture(true)
                  }} className={s.button}>
                    <img src={imgUpload} alt="trashIcon" className={sT.trashIcon}/>
                    Change cover
                  </Button>
                </>
              :  <>
                  {(!cropAnswerImg || isEditAnswerPicture) && <input type="file" accept=".jpg, .jpeg, .png" onChange={onFileAnswerChangeCallback}/>}
                  {inputAnswerImg
                    ? <>
                      <div className={s.imgContainer}>
                        <Cropper
                          image={inputAnswerImg}
                          crop={cropAnswer}
                          zoom={zoomAnswer}
                          cropSize={{width: canvaWidth, height: canvaHeight}}
                          onCropChange={onCropAnswerChange}
                          onCropComplete={onCropAnswerComplete}
                          onZoomChange={onZoomAnswerChange}
                          minZoom={minSliderValue}
                          maxZoom={maxSliderValue}
                          zoomSpeed={sliderStep * 2}
                        />
                      </div>
                      <SliderSingle
                        defaultValue={minSliderValue}
                        min={minSliderValue}
                        max={maxSliderValue}
                        step={sliderStep}
                        value={sliderAnswerValue[0]}
                        onValueChange={sliderAnswerChangeHandler}
                      />
                      <Button onClick={onApproveAnswer}>Approve</Button>
                    </>
                    : <>
                      <div className={s.dummyQuestionAnswer}>Plz select question img</div>
                    </>
                  }
                </>
            }

          </>
        )}
      </div>
    </DialogsCommon>
  )
}

type PropsType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  deckId: string
}

//todo: refactor: separate crop functions to another file, combine question & answer to component with variant