import type { NextPage } from 'next'
import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { getExampleDataUrl } from 'api/api'
import { LooseObject } from 'interfaces'
import Footer from 'components/Footer/Footer'
import Something from 'components/Something/Something'

type HolderProps = {
    data: LooseObject;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const response = await axios.get(getExampleDataUrl())
//     return { props: { data: response?.data || {} } }
// }

const Holder: NextPage<HolderProps> = ({ data = { text: 'Holder' } }) => {
    return (
        <React.Fragment>
            <main>
                <Something data={data} />
            </main>

            <Footer />
        </React.Fragment>
    )
}

export default Holder
