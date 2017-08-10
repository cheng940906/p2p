window.onload=function(){
  function chartPie(ids,myData,name){
        var colors = ['#FFBE25','#532E1A','#EB6877','#F29B76'];
        var id = new JSChart(ids, name);
        id.setDataArray(myData); 
        id.colorizePie(colors); 
        /*id.setSize(47,47);*/
        id.setPieValuesFontSize(-3);  //设置饼图上值的字体大小。
        id.setTitle("");
        id.setPieUnitsFontSize(0);
        id.setTextPaddingTop(0);
        /*id.resize(87, 67);*/
        id.draw(); 
  };
  var data = new Array(['',10], ['',35], ['',35], ['',20]);
  chartPie("chartcontainer",data,'pie');
  chartPie("chartcontainer2",data,'pie');
  function chartBar(ids,myData){
        var colors = ['#FFBE25','#532E1A','#FFBE25','#532E1A','#FFBE25','#532E1A'];
        var id = new JSChart(ids, 'bar');
        id.setDataArray(myData); 
        id.colorizeBars(colors); 
        id.setPieValuesFontSize(-3);  //设置饼图上值的字体大小。
        id.setTitle("");
        id.setPieUnitsFontSize(0);
        id.setTextPaddingTop(0);
        id.setBarBorderWidth(0);
        id.setAxisValuesNumberY(6);
        id.setBarSpacingRatio(50);
        id.setSize(755,410);
        id.setBarValuesColor("#666666");
       /* id.setAxisNameColor("#0f0");*/
        id.setAxisColor("#AAA");
        id.setAxisNameY("");
        id.setAxisNameX("");
        /*id.setAxisValuesAngle(5)*/
        id.draw(); 
  };
  var data = new Array(['2016年11月',0], ['2016年12月',3000], ['2017年01月',6000], ['2017年02月',10000],['2017年03月',8000], ['2017年04月',18000]);
  chartBar("chartcontainer-bar",data);
}  
  