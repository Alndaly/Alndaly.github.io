import { API_KEY } from '../../common/constant';
import React, { useState, useEffect } from 'react';
import { Map, APILoader, Marker } from '@uiw/react-amap';
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
    const [location, setLocation] = useState<any>()

    useEffect(() => {
        // 考虑到AMap加载延迟，此处加一个setTimeOut，使脚本加载在宏任务队列之后
        setTimeout(() => {
            setLocation(new AMap.LngLat(latitude, longitude))
        }, 500);

    }, [props]);

    return (
        <BrowserOnly fallback={<div></div>}>
            {() => {
                return (
                    <div className={styles.myMapContainer}>
                        <APILoader akay={API_KEY}>
                            <Map
                                center={[latitude, longitude]}
                                zoom={zoom}
                            >
                                <Marker visiable={true} title={address} position={location} />
                            </Map>
                        </APILoader>
                    </div >
                )
            }}
        </BrowserOnly>
    )
}