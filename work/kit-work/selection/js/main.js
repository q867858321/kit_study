//require.config({
//  baseUrl: "/frontendresp/module",
//  shim: {
//      'aub_lib/lib': {
//      //    deps: ['aub_lib/jquery.pack']
//      }
//  }
//});

require(['selection'], function (selection) {
	var selection_jQ = $('.m_selection');
	selection.setup(selection_jQ);
})
