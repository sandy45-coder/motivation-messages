function gm(event){
    event.preventDefault();
    let msg=document.getElementById("msg");
    let url = "https://quotes-api-self.vercel.app/quote";
    fetch(url)
    .then(res => res.json())
    .then(data=>msg.innerHTML=data.quote)
    .catch(err=> msg.innerHTML="issue"+err);
}