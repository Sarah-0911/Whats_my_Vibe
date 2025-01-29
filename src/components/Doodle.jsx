import { audioTape, djembe, eighthNote, eighthNotes, note, guitar, harmonica, headphones, mike, recordPlayer, sticks, tuningFork } from "../assets/musicDoodle";

export default function Doodle() {
  return (
    <>
      <img className="absolute left-24 sm:bottom-10 sm:left-72 w-20 h-auto rotate-12" src={audioTape} alt="audioTape icon" />
      <img className="absolute bottom-10 left-28 w-28 h-auto -rotate-12" src={djembe} alt="djembe icon" />
      <img className="absolute bottom-12 right-12 w-24 h-auto rotate-12" src={guitar} alt="guitar icon" />
      <img className="absolute top-24 left-1/3 w-20 h-auto" src={harmonica} alt="harmonica icon" />
      <img className="absolute top-6 right-1/3 w-20 h-auto" src={headphones} alt="headphones icon" />
      <img className="absolute top-20 left-14 w-16 h-auto rotate-12" src={mike} alt="mike icon" />
      <img className="absolute top-20 right-14 w-32 h-auto" src={recordPlayer} alt="recordPlayer icon" />
      <img className="absolute bottom-1/3 left-20 w-8 h-auto rotate-45" src={sticks} alt="sticks icon" />
      <img className="absolute bottom-16 right-1/4 w-16 h-auto" src={tuningFork} alt="tuningFork icon" />
      <img className="absolute bottom-8 right-96 w-6 h-auto rotate-12" src={eighthNote} alt="eighthNote icon" />
      <img className="absolute top-12 right-10 w-8 h-auto" src={eighthNotes} alt="eighthNotes icon" />
      <img className="absolute top-16 left-72 w-4 h-auto rotate-12" src={note} alt="note icon" />
    </>
  )
}
