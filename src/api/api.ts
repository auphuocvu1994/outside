import axios from 'axios'
import { LooseObject } from 'interfaces';
// import fsPromises from 'fs/promises';
import path from 'path'

const tokenStr = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1YXQtdGVzdC0wMDRAZXF1aXguYXBwIiwic3ViIjoiZXExNjM3NzQ0NDA5NDg4IiwiZXhwIjoxNjYyNDY1Nzg1Ljk4MiwiZGV2aWNlX2lkIjoiNjM5Y2I1NDgtYWIyOC00ZmUxLWI1NjctODYyZGM5Mzg1ZjgzIiwiaWF0IjoxNjYyNDY0NTg1fQ.eHM0GCJ7X8nUxdlePhoib9wzz16WbGAoOkA2FY9Uqwo3_lHeIDsqMvvhpNzATRDGRYM0vSLJtfsS0E0im9KWGJDEz3zNvN7aFtuTFpUv3VQXvdtYuf9QAOGldU8wTxvHuYtX4SewogA3oWOuidgqJrzwqSL0Z6nCgxjN4hi1oPsGqYG0QBPlTGg__nxU69in7gxkerTaWemhePP9yWpgCJs9pWSXAoLPYR_MZMm1FRODY-o9cswiuy6L13Lo_zaUdzSuS9JvVaol4TLo4ri8VLt4VV3jpu3pc10lq117405m3kipNoZ96s2j_g-pqxXtX7cekpKteYURJyNSDnMnqekvF3huzs4kG9o5wOD_VLGfbvj7dL6t2rjRGS4GZPnO3kFjr4DbYfAhA-plQJKUCSvhVnj8eHDTcz399mtUcVggN-RHCZfJb1LPd-LjNNCEitxo-Q17vp5ip-Wl1cs_olCN8S7knuMnLSuXOopOYyHxIa6uJ97X4NyUSiZWNqEhCC49pazpt1aJpN4hq99EkXPSSbYcdrPW0_sKyjvx6BqJ8JPqDxIMh2W5Eko5EP3bpyLHkndqulqLGebj8fwshkOwfXYc1DEK6e64oBDpMpN9d993laHKdJBe8AviGfJ6w4B5NfYH59KBsP3M7hGFaVQ7o4sGKEfUZ6Tq7Mzx3p4';

export const obj = 'ANZ.ASX'

export const getUrl = (path: string, version: string = 'v1') => {
    return `https://dev1-retail-api.equix.app/${version}/${path}`
}

export function getExampleDataUrl() {
    return getUrl(`fundamentals/get-data/${obj}`)
}

export async function getData() {
    let res: LooseObject
    try {
        res = await axios.get(getExampleDataUrl(), { headers: { "Authorization": `Bearer ${tokenStr}` } })
        return res 

    } catch (error) {
        console.log(process.cwd());

    }

}

// export function getExampleDataUrl() {
//     return getUrl('example/data')
// }