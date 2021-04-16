import Vue from 'vue';

//Capitalize Filter
Vue.filter("capitalize", (value) =>{
    if(!value){
        return "";
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

//Uppercase Filter

Vue.filter("uppercase", (value) =>{
    if(value){
        return value.toUpperCase();
    }
});

//Lowercase Filter

Vue.filter("lowercase", (value) =>{
    if(value){
    return value.toLowerCase();
    }
});

//Indian Currency (₹) Filter

Vue.filter("indian-currency", (value) =>{
    if(value){
    return `₹ ${value}`;
    }
});
