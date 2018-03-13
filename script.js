$( document ).ready(function(){
  $("#searchbtn").on("click",function(){
      var svalue = $("#stext").val();
      $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+svalue+"&format=json&callback=?",function(json) {
          var i = 1;
          var html= "";
          var lengo = json[1].length;
          if ( lengo > 0){
                 for ( var j = 0 ; j < lengo ; j++){
                 html += "<li class='item animated fadeIn'>"+"<a href='"+json[i+2][j]+"'class='url-i'>";
                 html += "<h3 class='title-i'>"+json[i][j]+"</h3>";
                 html += "<p class='para-i'>"+json[i+1][j]+"</p>";
                 html += "</a></li>";
               
            }
          }else{
            html += "<p id='error'>Sorry No Results Found</p>"; 
          }

          $("#results").html(html);
                     
         });
    });
        $("#stext").keyup(function(event){
            if(event.keyCode == 13){
                $("#searchbtn").click();
            }
        }); 
});
