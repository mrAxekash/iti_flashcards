import sC from "@/components/ui/Dialogs/DialogsCommon/DialogsCommon.module.scss"
import Cropper, {Area, Point} from "react-easy-crop"
import {
  canvaHeight,
  canvaWidth,
  maxSliderValue,
  minSliderValue,
  sliderStep
} from "@/components/ui/Dialogs/DialogsCommon/DialogsCommonData.ts"
import {SliderSingle} from "@/components/ui/SliderSingle/SliderSingle.tsx"
import {Button} from "@/components/ui/Button"
import {ChangeEvent, useEffect, useRef} from "react"
import s from "@/components/ui/Dialogs/DialogAddNewCard/DialogAddNewCard.module.scss"
import imgUpload from "@/assets/icons/imgUpload.svg"
import sT from "@/common/commonStyles/tables.module.scss"

export const ComboFileCropperSliderApprove = (props: ComboChangeCoverDummyImgCropperProps) => {
  return (
    <>
      {(!props.file.cropImg || props.file.isEditPicture) &&
          <input type="file" accept=".jpg, .jpeg, .png" onChange={props.file.onFileChangeCallback}/>}
      {
        props.inputImg
          ? <div>
            <div className={sC.imgContainer}>
              <Cropper
                image={props.inputImg}
                crop={props.cropper.crop}
                zoom={props.cropper.zoom}
                cropSize={{width: canvaWidth, height: canvaHeight}}
                onCropChange={props.cropper.onCropChange}
                onCropComplete={props.cropper.onCropComplete}
                onZoomChange={props.cropper.onZoomChange}
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
              value={props.slider.sliderValue[0]}
              onValueChange={props.slider.sliderChangeHandler}
            />
            <Button onClick={props.onApprove}>Approve</Button>
          </div>
          : <div className={sC.dummyImg}>{props.cropSuggestionText}</div>
      }
    </>
  )
}

export const ComboCropImgDummyChangeCover = (props: ComboCropImgDummyChangeCoverProps) => {
  return (
    <>
      {!props.cropImg
        ? <div className={sC.dummyImg}>{props.cropSuggestionText}</div>
        : <div className={sC.imgContainer}><img className={s.croppedImg} src={props.cropImg} alt="cropImg"/></div>
      }
      <Button variant="secondary" onClick={() => {
        props.setIsEditPicture(true)
      }} className={s.button}>
        <img src={imgUpload} alt="trashIcon" className={sT.trashIcon}/>
        Change cover
      </Button>
    </>
  )
}

export const CustomFileUpload = (props: CustomFileUploadProps) => {
  const inputFile = useRef<HTMLInputElement | null>(null)
  const onButtonClick = () => {
    inputFile.current?.click()
  }

  return (
    <>
      <input type="file" ref={inputFile} style={{display: 'none'}} accept=".jpg, .jpeg, .png"
             onChange={props.onFileChangeCallback}/>
      <Button variant="secondary" onClick={onButtonClick} className={s.button}>
        <img src={imgUpload} alt="trashIcon" className={sT.trashIcon}/>
        Change cover
      </Button>
    </>
  )
}

export const ComboChangeCoverDummyImgCropper = (props: ComboChangeCoverDummyImgCropperProps) => {
  // temp, should be outside later
  // const [inputImg, setInputImg] = useState<undefined | string>(undefined)
  /*const onFileChangeCallback = async (e: ChangeEvent<HTMLInputElement>) => {
    await onFileChange(e, props.setInputImg)
  }*/
  const cropSuggestionText = 'Plz select deck img... if you wish'
  // ==

  useEffect(() => {
    console.log('inputImg', props.inputImg)
  }, [props.inputImg])

  return (
    <>
      {
       !props.inputImg
            ? <div className={sC.dummyImg}>{cropSuggestionText}</div>
            : <>
           {
             !props.file.cropImg
               ? <>
                 <div className={sC.imgContainer}>
                   <Cropper
                     image={props.inputImg}
                     crop={props.cropper.crop}
                     zoom={props.cropper.zoom}
                     cropSize={{width: canvaWidth, height: canvaHeight}}
                     onCropChange={props.cropper.onCropChange}
                     onCropComplete={props.cropper.onCropComplete}
                     onZoomChange={props.cropper.onZoomChange}
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
                   value={props.slider.sliderValue[0]}
                   onValueChange={props.slider.sliderChangeHandler}
                 />
                 <Button onClick={props.onApprove}>Approve</Button>
               </>
               : <div className={sC.imgContainer}><img className={s.croppedImg} src={props.file.cropImg} alt="cropImg"/></div>
           }

         </>

      }

      {(!props.inputImg || props.file.cropImg) && <CustomFileUpload onFileChangeCallback={props.file.onFileChangeCallback}/> }
    </>
  )
}

type ComboChangeCoverDummyImgCropperProps = {
  file: {
    cropImg: string | undefined
    isEditPicture: boolean
    onFileChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
  }
  inputImg: undefined | string
  cropper: {
    crop: Point
    zoom: number
    onCropChange: (location: Point) => void
    onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void
    onZoomChange: (value: number) => void
  }
  slider: {
    sliderValue: number[]
    sliderChangeHandler: (newValue: number[]) => void
  }
  onApprove: () => void
  cropSuggestionText: string
}

type ComboCropImgDummyChangeCoverProps = {
  cropImg: string | undefined
  setIsEditPicture: (value: boolean) => void
  cropSuggestionText: string
}

type CustomFileUploadProps = {
  onFileChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
}