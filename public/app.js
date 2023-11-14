const init=()=>{
    const submission = document.getElementById('button')
    submission.addEventListener('click',requestHandler)
    sendGet({reqTable:'instructors',reqKey:'*'})
    sendGet({reqTable:'students',reqKey:'*'})
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
    .then(data=>printData(data,'get'))
}

const sendPost=({reqTable,reqName,reqAge,reqSubject,reqfKey})=>{
    const reqURL=`http://127.0.0.1:3000/${reqTable}`
    fetch(reqURL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({reqName,reqAge,reqSubject,reqfKey})
    })
    .then(response=>response.json())
    .then(data=>printData(data,'post'))
}

const sendPatch=({reqTable,reqKey,reqName,reqAge,reqSubject,reqfKey})=>{
    const reqURL=`http://127.0.0.1:3000/${reqTable}/${reqKey}`
    console.log(reqTable,reqKey)
    fetch(reqURL,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({reqName,reqAge,reqSubject,reqfKey})
    })
    .then(response=>response.json())
    .then(data=>printData(data,'patch'))
}

const printData=(data,verb)=>{
    console.log(data)
    const htmlLog = document.getElementById('log')
    const htmlRowText = document.createElement('p')
    htmlRowText.textContent = verb

    const htmlTable = document.createElement('table')
    htmlLog.prepend(htmlTable)
    htmlLog.prepend(htmlRowText)

    for(let row in data){
        const htmlRow = document.createElement('tr')
        htmlTable.append(htmlRow)
        console.log(typeof data[row]==='object')
        if(typeof data[row]==='object'){
            for(property in data[row]){
                const htmlProp = document.createElement('th')
                htmlRow.append(htmlProp)
                htmlProp.textContent = data[row][property]
            }
        }
        else{
            const htmlProp = document.createElement('th')
            htmlRow.append(htmlProp)
            htmlProp.textContent = data[row]
        }
    }

}

init()