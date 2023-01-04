var creating_row = document.createElement('div')
creating_row.setAttribute('class','row')

for(let i = 0; i<250; i++){

    res_fetching(i)

}
document.querySelector('body').append(creating_row)


async function res_fetching(i){

    var url_data = 'https://restcountries.com/v3.1/all'

    var url_fetch = await fetch(url_data)

    var res = await url_fetch.json()

    // console.log(res.length)

    var creating_col = document.createElement('div')
    creating_col.setAttribute('class', 'col-12 col-lg-3 col-sm-6 col-md-4')

    var creating_card = document.createElement('div')
    creating_card.setAttribute('class', 'card')
    creating_card.setAttribute('style', 'width: 18rem;')

    var h5_title = document.createElement('h5')
    h5_title.setAttribute('class', 'card-header')
    h5_title.setAttribute('class', 'text-center')

    var img_tag = document.createElement('img')
    img_tag.setAttribute('class', 'card-img-top')
    img_tag.setAttribute('alt', 'Card image cap')

    var creating_cardbody = document.createElement('div')
    creating_cardbody.setAttribute('class', 'card-body')

    //capi

    var p_cap = document.createElement('p')
    p_cap.setAttribute('class', 'card-text')
    p_cap.setAttribute('class', 'text-center')

    //regi

    var p_reg = document.createElement('p')
    p_reg.setAttribute('class', 'card-text')
    p_reg.setAttribute('class', 'text-center')

    //code

    var p_code = document.createElement('p')
    p_code.setAttribute('class', 'card-text')
    p_code.setAttribute('class', 'text-center')

    //anchor tag

    var create_button_div = document.createElement('div')
    create_button_div.setAttribute('class', 'text-center')

    var create_button = document.createElement('a')
    create_button.setAttribute('class','btn btn-primary')
    create_button.innerText = 'Click for Weather'

    create_button_div.append(create_button)

    //Appending

    creating_cardbody.append(p_cap)
    creating_cardbody.append(p_reg)
    creating_cardbody.append(p_code)
    creating_cardbody.append(create_button_div)


    creating_card.append(h5_title)
    creating_card.append(img_tag)
    creating_card.append(creating_cardbody)

    creating_col.append(creating_card)

    creating_row.append(creating_col)

    try{
        h5_title.innerText = `${res[i].name.common}`
    }
    catch(e){
        console.log(e)
        console.log('error')

        h5_title.innerText = "Not Found"
    }

    try{
        img_tag.setAttribute('src', `${res[i].flags.png}`)
    }
    catch(e){
        console.log('Image Not found')
    }

    try{
        p_cap.innerText = `Capital: ${res[i].capital[0]}`
    }
    catch(e){
        p_cap.innerText = 'Not Found'
    }

    try{
        p_reg.innerText = `Region: ${res[i].region}`
    }
    catch(e){
        console.log('Region Not found')
    }

    try{
        p_code.innerText = `Country Code: ${res[i].cca3}`
    }
    catch(e){
        console.log('Country Code Not found')
    }

    try{

        var link = `https://api.openweathermap.org/data/2.5/weather?q=${res[i].capital[0]}&appid=db6a1d8d68c7db4c6fc5223b44bf0a1a`

        var link_fetch = await fetch(link)

        var res_link = await link_fetch.json()

        // console.log(res_link.id)

        create_button.setAttribute('href', `https://openweathermap.org/city/${res_link.id}`)
    }
    catch(e){
        console.log('Weather Error')
    }
}