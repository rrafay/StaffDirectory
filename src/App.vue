<template>

  <div id="app">
    <div class="site-header closed">
 <div class="top-white">
 <div class="logo-menu">
  <div class="header-logo"><a href="http://www.marywood.edu"><img alt="marywood university logo" class="main-logo" src="@/assets/mulogo.svg"></a></div>
<div id="nav"><router-link to="/">Staff</router-link>  <router-link to="/departments">Departments</router-link></div>
  
 </div> 
 
     
 </div>
 
 
</div>
<br>
<br>
<br>
<br>
    <!-- <div id="nav">
      <router-link to="/">Staff</router-link> |
      
      <router-link to="/departments">Departments</router-link>
    </div> -->
    <router-view/>

    <br>
    <br>
    <br>
    <br>

<div class="footer-background" style="position:relative;z-index:1;margin-top:-1rem">       
<div class="footer-first-line nine-fifty">       
<div class="footer-address-holder">
<a href="https://www.google.com/maps/place/2300+Adams+Ave,+Scranton,+PA+18509/@41.4334254,-75.639425,17z/data=!3m1!4b1!4m5!3m4!1s0x89c4d96971825429:0x2e50c0bd7bd47986!8m2!3d41.4334254!4d-75.6372363">
2300 Adams Avenue Scranton, PA 18509 <br>
</a>

<a href="http://www.marywood.edutel:5703486211">
570-348-6211
</a>

| toll free: 1-TO-MARYWOOD <br>

  </div>
  
</div>
</div>
  </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
#app {
  font-family: 'Fira Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 1.5rem;
  float: left;
  
  
}

#nav a {
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: bold;
  color: #1a5632;
  border-bottom: 3px solid #1a5632;
  text-decoration: none;
    
}

#nav a.router-link-exact-active {
  color: #f5a800 ;
  border-bottom: 3px solid #f5a800;
}
.closed {
    height: 4rem;
    transition: height 0.7s;
    transition-timing-function: ease-in-out;
}
.footer-background{

  box-shadow: 0 0.1rem 0.5rem 0.1rem #474747;
    border-top: none;
        background-color: #015a20;
    
    height: 19.5rem;
    width:auto;
}

.nine-fifty {
    width: 95.5rem;
    min-width: 95.5rem;
    max-width: 95.5rem;
    margin-left: auto;
    margin-right: auto;
}

.footer-address-holder {
    padding-top: 1.4rem;
    color: #aed0ba;
    font-size: 1.2rem;
    line-height: 2rem;
    float: left;
    padding-left:12rem;
}
.top-white {
    background-color: #fff;
    width: 95.5rem;
    margin: auto;
    max-width: 95.5rem;
    height: 4rem;
}
.footer-address-holder a {
    text-decoration: none;
    color: #aed0ba;
}

.main-logo{
    width: 10rem;
    float: left;
    margin: 0;
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 1.5rem;
    transition: width 0.7s, padding-right 0.7s;
    transition-timing-function: linear;
}

.site-header {
    position: fixed;
    width: 100%;
    z-index: 2001;
    top: 0;
    left: 0;
    overflow: hidden;
    border-bottom: 0.3rem solid #015a20;
    box-shadow: 0 0.1rem 0.5rem 0.1rem #474747;
    background-color: #fff;
}

@media screen and (max-width: 530px) {
  #nav {
  padding: 0.5rem;
  float: center;
  
  
}
.footer-background{
  width: 150%
}
.footer-address-holder {
  padding-left: 0.5rem;
}
.main-logo{
  width:4rem;
}
}


</style>
