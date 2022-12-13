
document.querySelector('button').addEventListener('click', getRapperName);


 async function getRapperName(){
    const rapperName = document.querySelector('input').value
    try{
        const response =  await fetch(`https://testerrapapi.onrender.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h3').innerText = data.birthName
    }catch(error){
    console.log(error)
    }
}
