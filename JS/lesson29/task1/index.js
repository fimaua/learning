export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img')
    imgElem.setAttribute('alt', 'My photo')
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page')
    containerElem.append(imgElem)

    const onLoadImage = () => {
        const { width, height } = imgElem;
        imgElem.setAttribute('width', 200)
        imgElem.setAttribute('height', 100)

        callback(null, { width, height })
    }

    const onImageError = () => callback('Image load failed')

    imgElem.addEventListener('load', onLoadImage)

    imgElem.addEventListener('error', onImageError)
}