/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.1.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */
function readMoreFn(){
	$( "#blogDetail" ).toggle( "fast", function(bool) {
    if ($(this).is(':visible')) {
    	//console.log("more")
                $("#readMore").html('<strong>READ LESS....</strong>');
            } else {
            	$("#readMore").html('<strong>READ MORE....</strong>');
            }
  });
}


$("#readMore").on("click", readMoreFn);
