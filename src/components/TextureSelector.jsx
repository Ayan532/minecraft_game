import { useEffect, useState } from "react"
import { useStore } from "../hooks/useStore"
import { useKeyboard } from "../hooks/useKeyboard"
import { dirt, glass, grass, log, wood } from "../assets/images"
const images = {
	dirt: dirt,
	grass: grass,
	glass: glass,
	wood: wood,
	log: log,
}
const TextureSelector = () => {
    const [visible,setVisible]=useState(false)
    const [activeTexture,setTexture]=useStore((state)=>[state.texture,state.setTexture])
    const {dirt,glass,grass,log,wood}=useKeyboard()

    useEffect(() => {
		const textures = {
			dirt,
			grass,
			glass,
			wood,
			log
		}
		const pressedTexture = Object.entries(textures).find(([k, v]) => v)
		if (pressedTexture) {
			setTexture(pressedTexture[0])
		}
	}, [setTexture, dirt, grass, glass, wood, log])
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setVisible(false)

        },2000)
        setVisible(true);
        return()=>{
            clearTimeout(timer)
        }
    },[activeTexture])

  return visible &&(
    <div className="absolute cursor-style flex texture-selector">
  {Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
    </div>
  )
}

export default TextureSelector