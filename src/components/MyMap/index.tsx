import { API_KEY } from '../../common/constant';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
interface MapProps {
    latitude: number;
    longitude: number;
    zoom: number;
    address: string;
}

export default function MyMap(props: MapProps) {
    const { latitude, longitude, address, zoom } = props;
    let src: string;
    src = `https://m.amap.com/navi/?dest=116.470098,39.992838&destName=%E9%98%9C%E9%80%9A%E8%A5%BF&hideRouteIcon=1&key=3aa547ab4b94883184ff59510aec160e`
    return (
        <BrowserOnly>
            {() => {
                return (
                    <div className={styles.myMapContainer}>
                        <iframe src="https://m.amap.com/navi/?dest=116.470098,39.992838&destName=%E9%98%9C%E9%80%9A%E8%A5%BF&hideRouteIcon=1&key=3aa547ab4b94883184ff59510aec160e" frameBorder='0' />
                    </div>
                )
            }
            }
        </BrowserOnly >
    )
}
