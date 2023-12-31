import clickSoundTypeWriter from '../../assets/sounds/typewriter.wav'
import clickSoundOsu from '../../assets/sounds/osu.wav'
import errorSound from '../../assets/sounds/error.wav'
import { soundType } from '../gameSignals'

export const getClickSound = () => {
    switch (soundType.value) {
        case "typewriter":
            return clickSoundTypeWriter
        case "osu":
            return clickSoundOsu
        default:
            return new Audio()
    }
}

export const getErrorSound = () => {
    return errorSound
}