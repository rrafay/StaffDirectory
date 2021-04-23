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

<div class="footer-background">       
<div class="footer-first-line nine-fifty">       
<div class="footer-address-holder">
<a href="https://www.google.com/maps/place/2300+Adams+Ave,+Scranton,+PA+18509/@41.4334254,-75.639425,17z/data=!3m1!4b1!4m5!3m4!1s0x89c4d96971825429:0x2e50c0bd7bd47986!8m2!3d41.4334254!4d-75.6372363" target="_blank"
>
2300 Adams Avenue Scranton, PA 18509 
</a>
<br>
<a href="http://www.marywood.edutel:5703486211" >
570-348-6211
</a>

| toll free: 1-TO-MARYWOOD | <br>
<a href="http://www.marywood.edu/forms/frevvo?id=Directory" target="_blank">Suggest a Change</a>


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
    overflow-x: hidden;
    overflow-y: hidden;
    height: 4rem;
    width:auto;

    position:fixed;
    z-index:1;
    left:0;
    bottom:0;
    width:100%;
    padding-bottom: 0.3rem;
    
}

.nine-fifty {
    width: 95.5rem;
    min-width: 95.5rem;
    max-width: 95.5rem;
    margin-left: auto;
    margin-right: auto;
}

.footer-address-holder {
 
    padding-top: 0.3rem;
    color: #aed0ba;
    float: left;
    margin-left: 2rem;
    
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
.footer-address-holder a:hover {
    color: #f5a800;
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

@media screen and (max-width: 950px) {
  #nav {
  padding: 0.5rem;
  float: center;
  
  
}
.footer-background{
  overflow-x: hidden;
  height: 3rem;
  padding-bottom: 2rem;
}
.footer-address-holder {
  margin-left: 2rem;
}
.main-logo{
  width:6.5rem;
    height: 2rem;
    padding-right: 0.3rem;
    padding-left: 0.1rem;
}
}



</style>
