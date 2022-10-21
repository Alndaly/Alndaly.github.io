import { API_KEY } from '../../common/constant';
import React, { useState } from 'react';
import { Map, APILoader, Marker, ScaleControl } from '@uiw/react-amap';
import styles from './styles.module.css';

interface MapProps {
    latitude: number;
    longitude: number;
    zoom: number;
}

export default function MyMap(props: MapProps) {

    const { latitude, longitude, zoom } = props;
    const [location, setLocation] = useState<any>()

    // 考虑到AMap加载延迟，此处加一个setTimeOut，使脚本加载在宏任务队列之后
    setTimeout(() => {
        setLocation(new AMap.LngLat(latitude, longitude))
    }, 500);

    return (
        <div className={styles.myMapContainer}>
            <APILoader akay={API_KEY}>
                <Map
                    center={[latitude, longitude]}
                    zoom={zoom}
                >
                    <Marker visiable={true} title="杭州市" position={location} />
                </Map>
            </APILoader>
        </div >
    )
}