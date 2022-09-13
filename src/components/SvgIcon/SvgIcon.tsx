
import React, { CSSProperties } from 'react'
import * as icons from './icons';

export const path = icons

interface SvgIconProps {
    path: IconProps;
    onClick?: () => void;
    className?: string;
    style?: CSSProperties;
    size?: number;
    fill?: string;
}

export interface IconProps {
    d: string;
    w: number;
    h: number;
}

const SvgIcon: React.FC<SvgIconProps> = (props) => {
    const p: IconProps = (props.path || icons.mdiHelpRhombusOutline);
    return <svg onClick={props.onClick}
        className={`svgIcon ${(props.className || '')}`}
        style={props.style}
        width={props.size || 24}
        height={props.size || 24}
        viewBox={`0 0 ${p.w || 24} ${p.h || 24}`}>
        <path fill={props.fill || ''} d={p.d} />
    </svg>
}

export default SvgIcon
