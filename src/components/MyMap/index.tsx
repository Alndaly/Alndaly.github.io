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
    return (
        <BrowserOnly>
            {() => {
                return (
                    <div className={styles.myMapContainer}>
                        <iframe className={styles.mapIframe} src={`https://m.amap.com/navi/?dest=${latitude},${longitude}&destName=${address}&hideRouteIcon=1&key=${API_KEY}`} frameBorder='0' />
                    </div>
                )
            }
            }
        </BrowserOnly >
    )
}
