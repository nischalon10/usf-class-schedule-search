const data = {
    "1":{
        "ClassName":"African History since 1850",
        "Instructor":"Edward Kissi",
        "Location":"TBD",
        "Time":"11:00am-12:15pm",
        "Days":"Tuesday and Thursday",
        "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas fermentum elit quis iaculis. Suspendisse vel aliquam lacus. Nam id ipsum sit amet ligula dictum hendrerit at eget massa. Phasellus pulvinar porttitor dolor, non pellentesque lorem aliquet non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras quis finibus est, at aliquet arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mattis tortor ac commodo fermentum. Sed dictum gravida metus et convallis. Sed vitae luctus augue. Maecenas vitae augue ex. Etiam sit amet suscipit quam. In varius metus felis, blandit porttitor nisl ultrices at. Nunc est turpis, condimentum posuere dapibus sit amet, vulputate ac mauris."
    },
    "2":{
        "ClassName":"African History since 1850",
        "Instructor":"Edward Kissi",
        "Location":"TBD",
        "Time":"11:00am-12:15pm",
        "Days":"Tuesday and Thursday",
        "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas fermentum elit quis iaculis. Suspendisse vel aliquam lacus. Nam id ipsum sit amet ligula dictum hendrerit at eget massa. Phasellus pulvinar porttitor dolor, non pellentesque lorem aliquet non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras quis finibus est, at aliquet arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mattis tortor ac commodo fermentum. Sed dictum gravida metus et convallis. Sed vitae luctus augue. Maecenas vitae augue ex. Etiam sit amet suscipit quam. In varius metus felis, blandit porttitor nisl ultrices at. Nunc est turpis, condimentum posuere dapibus sit amet, vulputate ac mauris."
    },
    "3":{
        "ClassName":"African History since 1850",
        "Instructor":"Edward Kissi",
        "Location":"TBD",
        "Time":"11:00am-12:15pm",
        "Days":"Tuesday and Thursday",
        "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas fermentum elit quis iaculis. Suspendisse vel aliquam lacus. Nam id ipsum sit amet ligula dictum hendrerit at eget massa. Phasellus pulvinar porttitor dolor, non pellentesque lorem aliquet non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras quis finibus est, at aliquet arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mattis tortor ac commodo fermentum. Sed dictum gravida metus et convallis. Sed vitae luctus augue. Maecenas vitae augue ex. Etiam sit amet suscipit quam. In varius metus felis, blandit porttitor nisl ultrices at. Nunc est turpis, condimentum posuere dapibus sit amet, vulputate ac mauris."
    }
}

// Code for opening and closing the class select sheet
var acc = document.getElementsByClassName("class-popup");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
}


