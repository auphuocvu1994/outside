import type { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { LooseObject } from 'interfaces'
import { getData, obj } from 'api/api'
import ProfileTable from './ProfileTable'
import { FormattedMessage } from 'react-intl'
import fsPromises from 'fs/promises';
import path from 'path'

type ProfileProps = {
    data: LooseObject;
}

// ---- Call API ---- 
export const getServerSideProps: GetServerSideProps = async (context) => {
    const filePath = path.join(process.cwd(), 'src/json/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());
    const response = await getData()
    if (response) {
        return { props: { data: response?.data || {} } }
    } else {
        return { props: { data: objectData } }
    }
}

const Profile: NextPage<ProfileProps> = ({ data = { text: 'Profile' } }) => {
    console.log(data[obj]?.profile);
    
    return (
        <React.Fragment>
            <main>
                <div className="lm_item_container medium fullw100">
                    <div className='lm_content'>
                        <div className='wrapComponent'>

                            {/* ---- Profile ---- */}
                            <div className="profile">
                                <div className="profileInfo single">
                                    {/* Profile  */}
                                    <div>
                                        <div>
                                            <div className="ItemRow RowHead">
                                                <p className="uppercase lablel label--head  size--3 pd-top-8">{data[obj]?.profile.long_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div></div>
                                            <div className="ItemRow">
                                                <p className="capitalize lablel  size--3"> {data[obj]?.profile.address1}</p>
                                            </div>
                                            {data[obj]?.profile?.address2 && <div className="ItemRowGray">
                                                <p className="capitalize lablel  size--3"> {data[obj]?.profile.address2}</p>
                                            </div>}
                                            <div className="ItemRow">
                                                <p className="lablel  size--3"> {data[obj]?.profile.city}, {data[obj]?.profile.state} {data[obj]?.profile.zip}</p>
                                            </div>
                                            <div className="ItemRow">
                                                <p className="lablel  size--3"> {data[obj]?.profile.country}</p>
                                            </div>
                                            <div className="ItemRowGray">
                                                <p className="capitalize lablel  size--3"> {data[obj]?.profile.phone}</p>
                                            </div>
                                            <div className="ItemRow">
                                                <p className="lablel  size--3"> <a href={data[obj]?.profile.website}>{data[obj]?.profile.website} </a></p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="ItemRow">
                                                <p className="lablel  size--3">Sector(s): <span className="capitalize">{data[obj]?.profile.sector}</span> </p>
                                            </div>
                                            <div className="ItemRowGray">
                                                <p className="capitalize lablel  size--3">Industry: {data[obj]?.profile.industry}</p>
                                            </div>
                                            <div className="ItemRow">
                                                <p className="lablel  size--3">Full Time Employees: {data[obj]?.profile.full_time_employees.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className="ItemRowGray">
                                                <p className="capitalize lablel label--head  size--3">&nbsp;</p>
                                            </div>
                                            <div className="ItemRowGray">
                                                <p className="capitalize lablel label--head  size--3">&nbsp;</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Table  */}
                                    <div>
                                        <div>
                                            <div className="ItemRow RowHead">
                                                <p className="uppercase lablel label--head  size--3">
                                                    <FormattedMessage id="lang_key_executives" />
                                                </p>
                                            </div>
                                            <ProfileTable props={data} />

                                        </div>
                                    </div>
                                    {/* Description */}
                                    <div>
                                        <div>
                                            <div className="ItemRow RowHead pd-top-16 ">
                                                <p className="uppercase lablel label--head  size--3">
                                                    <FormattedMessage id="lang_description" />
                                                </p>
                                            </div>
                                            <div className="des-pragrap">
                                                <p className=' size--3'>{data[obj]?.profile.long_business_summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ----End Profile ---- */}

                        </div>
                    </div>
                </div>

                {/* <span>{data[obj]?.profile.zip}</span> */}
            </main>
        </React.Fragment>
    )
}

export default Profile
