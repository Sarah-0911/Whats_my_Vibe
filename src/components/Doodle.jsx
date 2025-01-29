import { audioTape, djembe, eighthNote, eighthNotes, note, guitar, harmonica, headphones, mike, recordPlayer, sticks, tuningFork } from "../assets/musicDoodle";

export default function Doodle() {
  return (
    <>
      <img className="absolute -top-40 left-0 w-80 h-auto" src={audioTape} alt="" />
      <img className="absolute top-40 left-20 w-80 h-auto" src={djembe} alt="" />
      <img className="absolute top-40 right-0 w-80 h-auto" src={guitar} alt="" />
      <img className="absolute -top-20 right-20 w-80 h-auto" src={harmonica} alt="" />
      <img className="absolute bottom-40 left-10 w-80 h-auto" src={headphones} alt="" />
      <img className="absolute -bottom-20 right-60 w-80 h-auto" src={mike} alt="" />
      <img className="absolute top-20 left-80 w-80 h-auto" src={recordPlayer} alt="" />
      <img className="absolute bottom-0 left-0 w-80 h-auto" src={sticks} alt="" />
      <img className="absolute -bottom-20 left-20 w-80 h-auto" src={tuningFork} alt="" />
    </>
  )
}
