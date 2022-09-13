import type { NextPage } from 'next'
import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { getExampleDataUrl } from 'api/api'
import { LooseObject } from 'interfaces'
import Footer from 'components/Footer/Footer'
import Something from 'components/Something/Something'

type AnalysisProps = {
    data: LooseObject;
}


// --- Test --- Fetching data from the JSON file to test 
// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), 'src/json/data.json');
//     const jsonData = await fsPromises.readFile(filePath);
//     const objectData = JSON.parse(jsonData.toString());
//     return {
//         props: { data: objectData }
//     }
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const response = await axios.get(getExampleDataUrl())
//     return { props: { data: response?.data || {} } }
// }

const Analysis: NextPage<AnalysisProps> = ({ data = { text: 'Analysis' } }) => {
    return (
        <React.Fragment>
            <main>
                <Something data={data} />
            </main>

            <Footer />
        </React.Fragment>
    )
}

export default Analysis
