export const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -2,
    transition: { duration: 0.2 }
  }
};

export const borderVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { 
      duration: 1.5, 
      ease: "easeInOut",
      delay: 0.3
    } 
  }
};

export const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1 + 0.5,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.15,
    y: -3,
    transition: { duration: 0.2 }
  }
};

export const headerVariants = {
  hidden: { y: -100 },
  visible: { 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

export const mobileNavItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5
    }
  })
};

export const linkVariants = {
  hover: {
    scale: 1.05,
    color: '#f59e0b',
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
};