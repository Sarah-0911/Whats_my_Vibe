import { audioTape, djembe, eighthNote, eighthNotes, note, guitar, harmonica, headphones, mike, recordPlayer, sticks, tuningFork } from "../assets/musicDoodle";

export default function Doodle() {
  return (
    <>
    <img className="absolute left-36 bottom-16 md:bottom-10 md:left-72 w-12 md:w-20 h-auto rotate-12 animate-fadeInOut delay-1s" src={audioTape} alt="audioTape icon" />
    <img className="absolute bottom-14 left-10 md:left-28 w-20 md:w-28 h-auto animate-float delay-3s" src={djembe} alt="djembe icon" />
    <img className="absolute bottom-6 md:bottom-12 right-6 md:right-20 w-20 md:w-24 h-auto rotate-12 animate-fadeInOut delay-3s" src={guitar} alt="guitar icon" />
    <img className="absolute top-48 md:top-24 left-1/3 w-12 md:w-20 h-auto animate-float delay-1s" src={harmonica} alt="harmonica icon" />
    <img className="absolute top-14 md:top-6 right-40 md:right-[40%] w-14 md:w-20 h-auto animate-fadeInOut delay-2s" src={headphones} alt="headphones icon" />
    <img className="absolute top-32 md:top-20 left-14 w-10 md:w-16 h-auto rotate-12 animate-fadeInOut" src={mike} alt="mike icon" />
    <img className="absolute top-40 md:top-20 right-8 md:right-14 w-28 md:w-32 h-auto animate-fadeInOut delay-3s" src={recordPlayer} alt="recordPlayer icon" />
    <img className="absolute bottom-44 md:bottom-1/3 left-8 md:left-20 w-4 md:w-8 h-auto rotate-45 animate-float delay-2s" src={sticks} alt="sticks icon" />
    <img className="absolute top-10 md:bottom-16 right-10 md:right-1/4 w-10 md:w-16 h-auto animate-fadeInOut delay-4s" src={tuningFork} alt="tuningFork icon" />
    <img className="absolute bottom-14 md:bottom-8 right-32 md:right-72 w-4 md:w-6 h-auto rotate-12 animate-float delay-2s" src={eighthNote} alt="eighthNote icon" />
    <img className="absolute top-28 md:top-12 right-10 w-6 md:w-8 h-auto animate-fadeInOut delay-3s" src={eighthNotes} alt="eighthNotes icon" />
    <img className="absolute top-16 left-8 md:left-72 w-4 h-auto rotate-12 animate-float delay-1s" src={note} alt="note icon" />
  </>
  )
}
