async function uploadToGithub(token, owner, repo, branch, fileName, fileContent) {
    const d = new Date()
    const path = `/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}/${fileName}`
    const data = await $.ajax({
        method: 'PUT',
        url: `https://api.github.com/repos/${owner}/${repo}/contents${path}`,
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28"
        },
        data: JSON.stringify({
            message: 'upload',
            branch: branch,
            content: fileContent
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            return data
        }
    })
    const downloadUrlOrigin = data?.content?.download_url
    return {
        github: downloadUrlOrigin,
        jsdelivr: `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}${path}`
    }
}