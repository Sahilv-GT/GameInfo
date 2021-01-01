
    function myFunction() {
     var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("menubar");
    tr = table.getElementsByTagName("tr");

  
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}




$('td', 'table').each(function(i) {
  $(this).text(i+1);
});



$('table.mytable').each(function() {
  var currentPage = 0;
  var numPerPage = 10;
  var $table = $(this);
  $table.bind('repaginate', function() {
      $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
  });
  $table.trigger('repaginate');
  var numRows = $table.find('tbody tr').length;
  var numPages = Math.ceil(numRows / numPerPage);
  var $pager = $('<div class="pager"></div>');
  for (var page = 0; page < numPages; page++) {
      $('<span class="page-number"></span>').text(page + 1).bind('click', {
          newPage: page
      }, function(event) {
          currentPage = event.data['newPage'];
          $table.trigger('repaginate');
          $(this).addClass('active').siblings().removeClass('active');
      }).appendTo($pager).addClass('clickable');
  }
  $pager.insertBefore($table).find('span.page-number:first').addClass('active');
});
