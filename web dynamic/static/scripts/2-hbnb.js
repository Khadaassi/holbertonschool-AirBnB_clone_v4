$(document).ready(function(){

    $(".check").click(function(){

        $("ul[data-id=':amenity_id']").prop("checked", true);

    });

    $(".uncheck").click(function(){

		$("ul[data-id=':amenity_id']").prop("checked", false);

    });

});