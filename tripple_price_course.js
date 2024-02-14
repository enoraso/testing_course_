
let normalSections = document.getElementsByClassName("kick_section");
let altSections = document.getElementsByClassName("kick_form");
const payType = document.getElementById("course-payment-type");
const priceFild = document.getElementById("course-price");
const priceWordsFild = document.getElementById("course-price-words");
const btnBuyAlt = document.getElementById("purchase_alt");
const btnBuyReg = document.getElementById("purchase_reg");
const btnBuyThird = document.getElementById("purchase_third");

window.onhashchange=function(){
let hash=location.hash;
if (hash==="#registrationForm"){hideAll();
altSections[0].classList.remove("hidden");
}else if(hash==="#paymentSuccessful"){hideAll();
altSections[1].classList.remove("hidden");
}else{hideAll();
showNormalState();}};
window.addEventListener("load", () => {let hash=location.hash;
if(hash==="#registrationForm"){hideAll();
altSections[0].classList.remove("hidden");
}else if(hash==="#paymentSuccessful"){hideAll();
altSections[1].classList.remove("hidden");
}else{
hideAll();
showNormalState();
}
});
btnBuyAlt.addEventListener("click", () => buyCourse(priceAlt));
btnBuyReg.addEventListener("click", () => buyCourse(priceReg));
btnBuyThird.addEventListener("click", () => buyCourse(priceThird));

function buyCourse(price) {

    switch(price){
        case priceAlt:
            payType.value = typeOpt[0]
            priceFild.value = price
            priceWordsFild.value = priceOneWords
            priceID = IDOpt[0]
            break;
        case priceReg:
            payType.value = typeOpt[1]
            priceFild.value = price
            priceWordsFild.value = priceTwoWords
            priceID = IDOpt[1]
            break;
        case priceThird:
            payType.value = typeOpt[2]
            priceFild.value = price
            priceWordsFild.value = priceThreeWords
            priceID = IDOpt[2]
            break;
        default:
            location.reload();
    }
  location.hash = "registrationForm";
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}

var stripe=Stripe("pk_live_51IExHcCegkqBtvRmaF2bwzdZGLCkC3z5jZTH7rLe8yYDytA9NSNsXNJRlv975sGydNjCJrbbUr8TNUdobNR4D2fy003F8G7V1Q");
const radio=document.querySelectorAll("input[type='radio']");
const typeLb=document.getElementById("label-type")
const typeWrap=document.getElementById("wrap-type");
const typeDropdown=document.getElementById("input-type");
const billNameLabel=document.getElementById("label-name");
const billNameWrap=document.getElementById("wrap-name");
const billNameInput=document.getElementById("input-name");
const billAddressLabel=document.getElementById("label-address");
const billAddressWrap=document.getElementById("wrap-address");
const billAddressInput=document.getElementById("input-address");
const billCityLable=document.getElementById("label-city");
const billCityWrap=document.getElementById("wrap-city");
const billCityInput=document.getElementById("input-city");
const billIndexLable=document.getElementById("label-index");
const billIndexWrap=document.getElementById("wrap-index");
const billIndexInput=document.getElementById("input-index");
const companyNamelabel=document.getElementById("label-company");
const companyNameWrap=document.getElementById("wrap-company");
const companyNameInput=document.getElementById("input-company");
const regNumberlabel=document.getElementById("label-registration-no");
const regNumberWrap=document.getElementById("wrap-registration-no");
const registrationNumberInput=document.getElementById("input-registration-no");
const vatNumberLabel=document.getElementById("label-vat-no");
const vatNumberWrap=document.getElementById("wrap-vat-no");
const vatNumberInput=document.getElementById("input-vat-no");
const companyAddressLabel=document.getElementById("label-company-address");
const companyAddressWrap=document.getElementById("wrap-company-address");
const companyAddressInput=document.getElementById("input-company-address");
const companyCityLable=document.getElementById("label-company-city");
const companyCityWrap=document.getElementById("wrap-company-city");
const companyCityInput=document.getElementById("input-company-city");
const companyIndexLable=document.getElementById("label-company-index");
const companyIndexWrap=document.getElementById("wrap-company-index");
const companyIndexInput=document.getElementById("input-company-index");
const nameInput=document.getElementById("name");
const addressInput=document.getElementById("address");
const cityInput=document.getElementById("city");
const indexInput=document.getElementById("index");
const wrapBill=document.getElementById("bill");
const wrapStripe=document.getElementById("online");
let paymentMethod="";
for (let i=0;i<radio.length;i++){
radio[i].addEventListener("change",(e)=>{
if(e.target.value=="Rēķins e-pastā"){paymentMethod=e.target.value;
typeLb.classList.remove("hidden");
typeWrap.classList.remove("hidden");
showPerson();
wrapBill.style.display="block";
wrapStripe.style.display="none";
}else{paymentMethod=e.target.value;
typeLb.classList.add("hidden");
typeWrap.classList.add("hidden");
showPerson();
hidePerson();
wrapBill.style.display="none";
wrapStripe.style.display="block";}});
}
typeDropdown.addEventListener("change",()=>{
if(typeDropdown.value=="Privātpersona"){showPerson();}else{
showCompany();}});
function showPerson(){
billNameInput.value=nameInput.value;
billNameInput.required=true;
billNameLabel.classList.remove("hidden");
billNameWrap.classList.remove("hidden");
billAddressInput.value=addressInput.value;
billAddressInput.required=true;
billAddressLabel.classList.remove("hidden");
billAddressWrap.classList.remove("hidden");
billCityInput.value=cityInput.value;
billCityInput.required=true;
billCityLable.classList.remove("hidden");
billCityWrap.classList.remove("hidden");
billIndexInput.value=indexInput.value;
billIndexInput.required=true;
billIndexLable.classList.remove("hidden");
billIndexWrap.classList.remove("hidden");
companyNamelabel.classList.add("hidden");
companyNameWrap.classList.add("hidden");
companyNameInput.value="";
companyNameInput.required=false;
regNumberlabel.classList.add("hidden");
regNumberWrap.classList.add("hidden");
registrationNumberInput.value="";
registrationNumberInput.required=false;
vatNumberLabel.classList.add("hidden");
vatNumberWrap.classList.add("hidden");
vatNumberInput.value ="";
companyAddressLabel.classList.add("hidden");
companyAddressWrap.classList.add("hidden");
companyAddressInput.value="";
companyAddressInput.required=false;
companyCityLable.classList.add("hidden");
companyCityWrap.classList.add("hidden");
companyCityInput.value="";
companyCityInput.required=false;
companyIndexLable.classList.add("hidden");
companyIndexWrap.classList.add("hidden");
companyIndexInput.value="";
companyIndexInput.required=false;
}
function hidePerson(){
billNameLabel.classList.add("hidden");
billNameWrap.classList.add("hidden");
billNameInput.value="";
billNameInput.required=false;
billAddressLabel.classList.add("hidden");
billAddressWrap.classList.add("hidden");
billAddressInput.value="";
billAddressInput.required=false;
billCityLable.classList.add("hidden");
billCityWrap.classList.add("hidden");
billCityInput.value="";
billCityInput.required=false;
billIndexLable.classList.add("hidden");
billIndexWrap.classList.add("hidden");
billIndexInput.value="";
billIndexInput.required=false;
}
function showCompany(){
hidePerson();
companyNamelabel.classList.remove("hidden");
companyNameWrap.classList.remove("hidden");
companyNameInput.required=true;
regNumberlabel.classList.remove("hidden");
regNumberWrap.classList.remove("hidden");
registrationNumberInput.required=true;
vatNumberLabel.classList.remove("hidden");
vatNumberWrap.classList.remove("hidden");
companyAddressLabel.classList.remove("hidden");
companyAddressWrap.classList.remove("hidden");
companyAddressInput.required=true;
companyCityLable.classList.remove("hidden");
companyCityWrap.classList.remove("hidden");
companyCityInput.required=true;
companyIndexLable.classList.remove("hidden");
companyIndexWrap.classList.remove("hidden");
companyIndexInput.required=true;}
let courseUrl=window.location.href;
let successUrl=courseUrl.split("#")[0]+"#paymentSuccessful";
let btnPayment=document.getElementById("btn-payment");
btnPayment.addEventListener("click",()=>{
stripe.redirectToCheckout({
lineItems: [
{
price: priceID,
quantity: 1,
},
],
mode: "payment",
successUrl: successUrl,
cancelUrl: courseUrl,
customerEmail: document.getElementById("E-pasts").value,
})
.then(function (result) {});
});
document.querySelector("#wf-form").addEventListener("submit",()=>{
setTimeout(()=>{
if (paymentMethod=="Stripe"){btnPayment.click();}},1000);});
function hideAll(){hideElements(normalSections);hideElements(altSections);}
function hideElements(elements){
for (let i=0;i<elements.length;i++){elements[i].classList.add("hidden");}}
function showNormalState(){
for (let i=0;i<normalSections.length;i++){normalSections[i].classList.remove("hidden");}}