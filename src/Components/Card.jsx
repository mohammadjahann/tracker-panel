import React from 'react'

const Card = ({ styles, children }) => {
    return (
        <div className={`${styles} rounded-2xl p-6 shadow-lg bg-white/80 backdrop-blur-xl dark:bg-white/10 dark:backdrop-blur-2xl dark:border dark:border-white/10`}>
            {children}
        </div>
    )
}

export default Card