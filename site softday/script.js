const fromText =document. querySelector ('.from-text');
let toText = document. querySelector('.to-text');
exchangeIcon =document. querySelector('.change');
selectTag =document. querySelector('.select');
icons =document. querySelector('.row i');
translateBtn =document. querySelector('.button');

selectTag.forEach(tag  => {
    for(let country_code in countries){let selected = id == 0 ? country_code == "en-GB" ? "selected": "" : country_code-- 
    "hi-IN" ? "selected": "" ;
    let option =<Option value="$ {country_code}">${countries[country_code]}</Option>; tag.insertAdjacHTML("beforeend",option);
    }
    
});
exchangeIcon.addEventlistener("click",()=>{
    let tempText = fromText.value;
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempLang;
    selectTag[0].value = selectTag[1].value; 
    selectTag[1].value =  tempLang;
});