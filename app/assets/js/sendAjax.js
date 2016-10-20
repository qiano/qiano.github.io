  /* 动态写入数据 */
 function view(data){
    var html = [];
    for(var i = 0; i < data.length;i++) {
      
   
        html += '     <tr >'
        +'<td><input type="checkbox" /></td>'
      + '  <td>'+data[i].id+'</td>'
     +'   <td><a href="#">'+data[i].shopname+'</a></td>'
            +'    <td>'+data[i].name+'</td>'
       +' <td>'+data[i].money+'</td>'
      +'  <td>'+data[i].bankname+'</td>'
       +' <td>'+data[i].banknumber+'</td>'
      + '  <td>'+data[i].starttime+'</td>'
        +'<td>'+data[i].stoptime+'</td>'
      +'  <td class="statu red">'+data[i].status+'</td>'
       +' <td>'
          +'<div class="am-btn-toolbar">'
          +'  <div class="am-btn-group am-btn-group-xs">'
             +' <button class="am-btn am-btn-default am-btn-xs pass"><span class="am-icon-archive"></span> 审核通过</button>'
                  +'  <button class="am-btn am-btn-default am-btn-xs paydone"><span class="am-icon-cny"></span> 支付完成</button>'
                 +' </div>'
               +' </div>'
            +'  </td>'
           +' </tr>';
    }
    $('#list-wrap').html(html);
 }
  /* ajax 请求更新数据 */
 function sendAjax(page,size){
    var url = '';
    view(data.data[page-1].con);
    /*$.ajax({  
        url:'data/'+ page +'.txt',  
        type:'GET',  
        cache:false,   
        dataType: 'json',
        success: function(data) {
            if(data){
                view(data.data.list)
            }
        }
    });*/
 }