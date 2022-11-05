import React, { Component } from 'react'
import $ from 'jquery';
$(document).ready(function(){
  var text = window.location.href  
  if(text != "http://localhost:3000/sign-in" && text != "http://localhost:3000/")
  {    
    $(".auth-inner").addClass('login_page');
  }
  
    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
});

export default class Success extends Component {
  render() {
    return (      
      <form>      
      <a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>      
      <table >
      <tbody>
      <tr>
        <td>Photo</td>
        <td><img height="300" width="300" src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" /></td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Father Name</td>
        <td>Velmurugan</td>        
      </tr>
      <tr>
        <td>Mother Name</td>
        <td>Sornalathe</td>        
      </tr>
      <tr>
        <td>Nationality</td>
        <td>Indian</td>        
      </tr>
      <tr>
        <td>Gender</td>
        <td>Male</td>        
      </tr>
      <tr>
        <td>Qualification</td>
        <td>MCA</td>        
      </tr>
      <tr>
        <td>Mobile</td>
        <td>9944535174</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>
      <tr>
        <td>Name</td>
        <td>Selvakumar</td>        
      </tr>

      </tbody>
      </table>
      </form>
    )
  }
}
