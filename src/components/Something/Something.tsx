import React from 'react'
import { LooseObject } from 'interfaces'
import s from './Something.module.css'

type ProfileProps = {
    data: LooseObject;
}
const Profile: React.FC<ProfileProps> = ({ data }) => {
    return (
        <div className={s.container}>
            {data.text}
        </div>
    )
}

export default Profile