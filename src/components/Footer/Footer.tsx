import React from 'react'
import s from './Footer.module.css'
import { FormattedMessage } from "react-intl";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="lang_this_data_is_powered_by" />{' '}
        <span className={s.logo}>
          <Image src="/yahoo.svg" alt="Yahoo Logo" width={66} height={24} />
        </span>
      </a>
    </footer>
  )
}

export default Footer