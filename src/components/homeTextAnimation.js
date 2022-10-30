export const anmiaVariant = {
    hidden: {
        // y: 90,
        opacity: 0
    },
    visible: {
        // y: 0,
        opacity: 1,
        transition: {
            delay:5.2,
            staggerChildren: 0.4,
            delayChildren: 5.6,
            duration: 2,
        }
    },
}

export const anmiaVariant2 = {
    hidden: {
        // y: 90,
        opacity: 0
    },
    visible: {
        // y: 0,
        opacity: 1,
        transition: {
            delay: 5.2,
            staggerChildren: 0.4,
            delayChildren: 5.6,
            duration: 1,
        }
    },
}


export const childVariant = {
    hidden: {
        y: 90,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,

    },
}

export const iVariant = {
    hidden: {
        x: 90,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,

    }
}
export const uVariant = {
    hidden: {
        y: -50,
        opacity: 0,
        scale: 0,
    },
    visible: {
        y: 0,
        scale: 1,
        opacity: 1,

    }
}
export const mVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        rotate: [-180, -180, 180, 0],
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}
export const sVariant = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        x: [-50, 50, 0],
        opacity: 1,
        transition: {
            duration: 0.8,
            type: 'spring',
            damping: 320
        }
    }
}
export const webVariant = {
    hidden: {
        opacity: 0,
        y: 150,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            type: 'spring',
            stiffness: 120,
            delay: 11.5,
        }
    }
}

