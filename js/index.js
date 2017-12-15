 $(document).ready(function(){
  $("#b1").click(function(){
  	var m=$("#search").val();
  $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch="+m+"&srlimit=10",function(data){
  	  $("#quote").empty();
      z=data.query.search;
      for(i=0;i<10;i++){
      title=z[i].title;
      content=z[i].snippet;
      console.log(content);
      $("#quote").append("<div><h3><a href='https://en.wikipedia.org/wiki/"+title+"'>"+title+"</a></h3><p>"+content+"</p></div>");
        
}

    
     
  });
    });
   $(document).keyup(function(){
  	var m=$("#search").val();
  $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch="+m+"&srlimit=10",function(data){
  	  $("#quote").empty();
      z=data.query.search;
      for(i=0;i<10;i++){
      title=z[i].title;
      content=z[i].snippet;
      console.log(content);
      $("#quote").append("<div><h3><a href='https://en.wikipedia.org/wiki/"+title+"'>"+title+"</a></h3><p>"+content+"</p></div>");
        
}

    
     
  });
    });
  
    });