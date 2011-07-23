/**
 * @TODO	get band intervals from settings
 * @TODO	add filtering
 */

var tm;

Drupal.behaviors.gvo_timemap = function(context) {
    tm = TimeMap.init({
        mapId: "map",
        timelineId: "timeline",
        options: {
    		mapType: 'normal',
    		mapZoom: 5
    	},
        datasets: [
            {
                id: "items",
                title: "Items",
				type: "jsonp",
                options: {
                    url: Drupal.settings.basePath + "api/json/items&callback=",
                    preloadFunction: function(result) {return result.items;}
                }
            }
        ],
        
        bandIntervals: [
                Timeline.DateTime.MONTH,
                Timeline.DateTime.YEAR 
        ]
    });
}