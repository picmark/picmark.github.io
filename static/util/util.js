const READER = new FileReader()
function fileToBase64(file) {
    return new Promise((resolve => {
        READER.onload = function (event) {
            const fileContent = event.target.result
            resolve(fileContent.split(',')[1])
        }
        READER.readAsDataURL(file)
    }))
}