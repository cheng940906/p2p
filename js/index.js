  
  $(function(){
     /*---------------------左右滑动---------------------------*/
      var imgs=$(".xiangmu-contanct",$(".xiangmu-con-con")[0]);  //获取元素
      var list=$("li",$(".xiangmu-nav")[0]);
      var dian=$(".xiangmu-con")[0];
      var num=0; 
      for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left="721px"
      };
      var now=0;
      var next=0;
      function move(type){
          type=type||"right"
          
          if(type=="right"){
                next++;
            if(next>=imgs.length){
            next=0;
              }  
                imgs[next].style.left="721px";
                animate(imgs[now],{left:-721});
          }else if(type=="left"){
                next--;
                if(next<=-1){
                next=imgs.length-1;
                }
                imgs[next].style.left="-721px";
                animate(imgs[now],{left:721});
            }  
          
          imgs[now].style.left="0px";
        
          animate(imgs[next],{left:0});
          list[next].className="xiangmu-nav-list active";
          list[now].className="xiangmu-nav-list";
          now=next;
      }
      //轮播点
      for (var i = 0; i < list.length; i++) {
          list[i].name=i;
          list[i].onclick=function(){
          next=this.name;
          imgs[now].style.left="0px";
          imgs[next].style.left="721px";
          animate(imgs[now],{left:-721});
          animate(imgs[next],{left:0});
          list[next].className="xiangmu-nav-list active";
          list[now].className="xiangmu-nav-list";
          now=next;
          }
      };
      /*----------------------------------------图表------------------------------------*/
       chart("graph",75);
       chart("graph2",75);
       chart("graph3",75);
       chart("graph4",75);
       chart("graph5",100);
       chart("graph14",75);
       chart("graph15",75);
       chart("graph16",75);
       chart("graph17",75);
       chart("graph18",100);
       chart("graph19",75);
       chart("graph20",75);
       chart("graph21",75);
       chart("graph22",75);
       chart("graph23",100);
     function chart(ids,data){
        var myData = new Array(['',data],['',(100-data)]);
        var colors = ['#FFBE25','#fff'];
        var id = new JSChart(ids, 'pie');
        id.setDataArray(myData); 
        id.colorizePie(colors); 
        id.setSize(-17,-17);
        id.setPieValuesFontSize(-3);  //设置饼图上值的字体大小。
        id.setTitle("");
        id.setPieUnitsFontSize(0);
        id.setTextPaddingTop(0);
        id.resize(77,57);
        id.draw(); 
      };
      $("canvas").css({"marginTop":'-15px',"marginLeft":'20px',"transform": "rotate(-90deg)"});
      

})