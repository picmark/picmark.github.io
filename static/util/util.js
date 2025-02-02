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

function copyToClipboard(content) {
    navigator.clipboard.writeText(content)
}

function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function get(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

function remove(key) {
    localStorage.removeItem(key)
}

function clear() {
    localStorage.clear()
}