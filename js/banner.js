  $(function(){
/*-------------------------------模态框------------------------*/
    function carousalcon(id){
      $('#myCarousel').carousel({
        interval: 2000
      });
      $(id).on('shown.bs.modal', function () {
        $('#myInput').focus()
      })
    }
    carousalcon('#myModa');
    carousalcon('#myModal');
    carousalcon('#myModa2');
    carousalcon('#myModa3');

/*----------------------------单页-----------------------------------*/ 
      $(function () {
      $('#myTab li:eq(0) a').tab('show');
      });
})
 