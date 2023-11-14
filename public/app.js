const init=()=>{
    const submission = document.getElementById('button')
    submission.addEventListener('click',requestHandler)
}

const requestHandler=()=>{
    const searchInput = getValues()
    sendRequest(searchInput)
}

const getValues=()=>{
    const reqVerb = document.getElementById('verb').value
    const reqTable = document.getElementById('table').value
    const reqKey = document.getElementById('pKey').value
    const reqName = document.getElementById('name').value
    const reqAge = document.getElementById('age').value
    const reqSubject = document.getElementById('subject').value
    const reqfKey = document.getElementById('fKey').value
    return {reqVerb,reqTable,reqKey,reqName,reqAge,reqSubject,reqfKey}
}

const sendRequest=(searchInput)=>{
    switch(searchInput.reqVerb){
        case 'get':
            sendGet(searchInput)
            break
        case 'post':
            sendPost(searchInput)
            break
        case 'patch':
            sendPatch(searchInput)
            break
        case 'delete':
            sendDelete(searchInput)
            break
    }
}

const sendGet=({reqTable,reqKey})=>{
    const reqURL=`http://127.0.0.1:3000/${reqTable}/${reqKey}`
    fetch(reqURL,{
        method:'GET'
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}

init()