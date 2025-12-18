export function getApi (url) {
    fetch(url)
    .then(res => {
        if (!res.ok)
            throw new Error ("Hubo un error")
        return res
    })
    .catch(error => {console.error(error)})
}