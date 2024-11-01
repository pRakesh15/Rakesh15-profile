export const slideInFromLeft = (delay) => {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay:delay,
          duration: 0.5,
        },
      },
    };
  };
  
  export const slideInFromRight = (delay) => {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay:delay,
          duration: 0.5,
        },
      },
    };
  };


export const slideInFromTop=
{

    hidden:{y:-100,opacity:0},
    visible:{
        y:0,
        opacity:1,
        transition:{
            delay:1.5,
            duration:0.7,
        },
    },
}

export const slideInFromButtom=
{

    hidden:{y:100,opacity:0},
    visible:{
        y:0,
        opacity:1,
        transition:{
            delay:1.2,
            duration:0.5,
        },
    },
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
