import { useStore } from "../hooks/useStore"


const Menu = () => {
    const [saveWorld,resetWorld]=useStore((state)=>[state.saveWorld,state.resetWorld])
  return (
    <div className="absolute top-10 left-0 flex w-28 ">
    <button className="w-full rounded-full bg-green-500 px-2 py-1 text-white " onClick={()=>saveWorld()}>Save</button>
    <button className="w-full rounded-full bg-red-500 px-2 py-1 text-white " onClick={()=>resetWorld()}>Reset</button>
    </div>
  )
}

export default Menu