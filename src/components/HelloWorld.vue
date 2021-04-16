<template>
  <div>
    <h2>Vue J.S Filters</h2>
    <hr>
    <h3>{{msg | capitalize | uppercase | lowercase}}</h3>
    <h3>{{msg | capitalize}}</h3>
    <h3>{{msg | uppercase}}</h3>
    <h3>{{msg | lowercase}}</h3>
    <h2>{{amount | indian-currency}}</h2>
    <hr>
    <input type="search" name="search" id="search" v-model="search" placeholder="Search">

    <table>
      <tr>
        <th>S.No.</th>
        <th>Id</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Username</th>
        <th>Email</th>
        <th>Website</th>
        <th>Address</th>
      </tr>
      <tr v-for="(data,index) in filterResult" :key="data.id">
        <td>{{index+1}}</td>
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>{{data.phone}}</td>
        <td>{{data.username}}</td>
        <td>{{data.email}}</td>
        <td>{{data.website}}</td>
        <td>{{data.address.city}} - {{data.address.street}} - {{data.address.suite}} - {{data.address.zipcode}}</td>
      </tr>
    </table>
    <hr>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data(){
    return{
      msg: 'my name is shubham singh',
      amount: 100,
      usersData: [],
      errors: [],
      search: ''
    }
  },
   mounted(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      response => {
        console.log('Api Response:: ', response.data);
        if(response) this.usersData = response.data;
      }
    ).catch(error => {
      console.log('Api Errors:: ', error);
      this.errors.push(error);
    });
  },
  computed: {
    filterResult(){
      if(this.search){
        return this.usersData.filter((data)=>{
          return this.search.toLowerCase().split(' ').
          every(v => data.name.toLowerCase().includes(v) || data.username.toLowerCase().includes(v)
          || data.phone.toLowerCase().includes(v) || data.email.toLowerCase().includes(v) ||
          data.website.toLowerCase().includes(v) || data.id.toLowerCase().includes(v) ||
          data.address.city.toLowerCase().includes(v) || data.address.street.toLowerCase().includes(v)
          || data.address.suite.toLowerCase().includes(v) || data.address.zipcode.toLowerCase().includes(v))
      });
      }else{
        return this.usersData;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    width: 100%;
    border-collapse: collapse;
  }
  th,td{
    border: 1px solid black;
    font-size: 1.1rem;
  }
  input{
    padding: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    position: relative;
    top: 0;
    left: 500px;
  }
</style>
