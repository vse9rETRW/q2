export const setXsrf = token => localStorage.setItem('xsrf', token)
export const getXsrf = () => localStorage.getItem('xsrf')
export const removeXsrf = () => localStorage.removeItem('xsrf')