import React from "react";
import './Mindmap.scss'

interface props {
    onload: boolean;
}

const FrameMindmap: React.FC<props> = (onload) => {
    return (
        <div className='frame-area'>
            Фрейм загружается
            <iframe
                title='mindmap'
                width='960'
                height='480'
                loading='lazy'
                src='https://www.mindmeister.com/maps/public_map_shell/2553106914/react?width=600&height=400&z=auto&no_share=1&no_logo=1'
                className='forFrame'>
                Ваш браузер не отображает фреймы. Пожалуйста, посетите{' '}
                <a
                    href='https://www.mindmeister.com/2553106914/react'
                    target='_blank'
                    rel='noreferrer'>
                    React
                </a>{' '}
                в MindMeister.
            </iframe>
    </div>

);
};

export default FrameMindmap;