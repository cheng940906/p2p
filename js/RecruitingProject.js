
  $(function(){
       chart("graph6",75);
       chart("graph7",25);
       chart("graph8",75);
       chart("graph9",25);
       chart("graph10",75);
       chart("graph11",25);

     function chart(ids,data){
        var myData = new Array(['',data],['',(100-data)]);
        var colors = ['#FFBE25','#fff'];
        var id = new JSChart(ids, 'pie');
        id.setDataArray(myData); 
        id.colorizePie(colors); 
        id.setSize(47,47);
        id.setPieValuesFontSize(-3);  //设置饼图上值的字体大小。
        id.setTitle("");
        id.setPieUnitsFontSize(0);
        id.setTextPaddingTop(0);
        id.resize(87, 67);
        id.draw(); 
      };

     $("canvas").css({"margin":"0px auto","transform":"rotate(-90deg)"});
    
})