import { API_KEY } from '../../common/constant';
import React, { useState, useEffect } from 'react';
import { Map, APILoader, Marker } from '@uiw/react-amap';
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from './styles.module.css';

interface MapProps {
    latitude: number;
    longitude: number;
    zoom: number;
    address: string;
}

function CustomMap(props: MapProps) {
    const { latitude, longitude, address, zoom } = props;
    const [location, setLocation] = useState<any>()

    useEffect(() => {
        // 考虑到AMap加载延迟，此处加一个setTimeOut，使脚本加载在宏任务队列之后
        setTimeout(() => {
            setLocation(new AMap.LngLat(latitude, longitude))
        }, 500);
    }, [])

    return (
        <BrowserOnly fallback={<div>...</div>}>
            {() => {
                const Component = require("@uiw/react-amap");
                const { Map, APILoader, Marker } = Component;
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
    );
}

export default CustomMap;