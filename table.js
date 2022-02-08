$(document).ready(function () {
  $("#btn").click(function (event) {
    $("table").append("<caption></caption>");
    $("table").append("<thead></thead>");
    $("thead").append("<tr id='showheading'></tr>");
    $("#showheading").append("<th></th>");
    $("#showheading").append("<th></th>");
    $("#showheading").append("<th></th>");
    $("#showheading").append("<th></th>");
    $("#showheading").append("<th></th>");

    $("table").append("<tbody></tbody>");
    $("tbody").append("<tr id='showcalories'></tr>");
    $("tbody").append("<tr id='showfat'></tr>");
    $("table").append("<tfoot></tfoot>");
    $("tfoot").append("<tr id='showven'></tr>");
    $("tbody tr,tfoot tr").append("<td></td>");
    $("tbody tr,tfoot tr").append("<td></td>");
    $("tbody tr,tfoot tr").append("<td></td>");
    $("tbody tr,tfoot tr").append("<td></td>");
    $("tbody tr,tfoot tr").append("<td></td>");

    $.getJSON("data.json", function (jqdata) {
      $("caption").append(jqdata.title);
      $("#showheading th:first-child").append(jqdata.heading);
      $("#showheading th:nth-child(2)").append(jqdata.head1);
      $("#showheading th:nth-child(3)").append(jqdata.head2);
      $("#showheading th:nth-child(4)").append(jqdata.head3);
      $("#showheading th:last-child").append(jqdata.head4);

      $("#showcalories td:first-child").append(jqdata.subheadcal);
      $("#showcalories td:nth-child(2)").append(jqdata.cal1);
      $("#showcalories td:nth-child(3)").append(jqdata.cal2);
      $("#showcalories td:nth-child(4)").append(jqdata.cal3);
      $("#showcalories td:last-child").append(jqdata.cal4);

      $("#showfat td:first-child").append(jqdata.subheadfat);
      $("#showfat td:nth-child(2)").append(jqdata.fat1);
      $("#showfat td:nth-child(3)").append(jqdata.fat2);
      $("#showfat td:nth-child(4)").append(jqdata.fat3);
      $("#showfat td:last-child").append(jqdata.fat4);

      $("#showven td:first-child").append(jqdata.subheadven);
      $("#showven td:nth-child(2)").append(jqdata.ven1);
      $("#showven td:nth-child(3)").append(jqdata.ven2);
      $("#showven td:nth-child(4)").append(jqdata.ven3);
      $("#showven td:last-child").append(jqdata.ven4);
    });
  });
});