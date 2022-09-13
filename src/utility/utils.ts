import axios from 'axios'
import { QueryObject } from 'interfaces'

export const clone = (obj: any) => {
    try {
        if (!obj) return obj
        return JSON.parse(JSON.stringify(obj))
    } catch (error) {
        console.error('clone obj error: ', error)
    }
}