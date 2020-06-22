export const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement('img')
        imgElem.setAttribute('alt', 'My photo')
        imgElem.src = imgSrc;

        const containerElem = document.querySelector('.page')
        containerElem.append(imgElem)

        const onLoadImage = () => {
            const { width, height } = imgElem;
            imgElem.setAttribute('width', 200)
            imgElem.setAttribute('height', 100)

            resolve({ width, height })
        }

        const onImageError = () => reject('Image load failed')

        imgElem.addEventListener('load', onLoadImage)

        imgElem.addEventListener('error', onImageError)
    })
    return p;
}

// const imgSrc = 'https://i.pinimg.com/originals/4b/1d/11/4b1d11587776cdda3423684ff74f2660.jpg'

// const result = addImage(imgSrc)

// result.then(data => console.log(data))
// result.catch(error => console.log(error))