var wms_layers = [];

var format_CD3AbsenteeTurnout_0 = new ol.format.GeoJSON();
var features_CD3AbsenteeTurnout_0 = format_CD3AbsenteeTurnout_0.readFeatures(json_CD3AbsenteeTurnout_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CD3AbsenteeTurnout_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CD3AbsenteeTurnout_0.addFeatures(features_CD3AbsenteeTurnout_0);
var lyr_CD3AbsenteeTurnout_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CD3AbsenteeTurnout_0, 
                style: style_CD3AbsenteeTurnout_0,
                interactive: true,
    title: 'CD3 Absentee Turnout %<br />\
    <img src="styles/legend/CD3AbsenteeTurnout_0_0.png" /> 0.04 - 0.06<br />\
    <img src="styles/legend/CD3AbsenteeTurnout_0_1.png" /> 0.06 - 0.08<br />\
    <img src="styles/legend/CD3AbsenteeTurnout_0_2.png" /> 0.08 - 0.1<br />\
    <img src="styles/legend/CD3AbsenteeTurnout_0_3.png" /> 0.1 - 0.12<br />\
    <img src="styles/legend/CD3AbsenteeTurnout_0_4.png" /> 0.12 - 0.13<br />'
        });

lyr_CD3AbsenteeTurnout_0.setVisible(true);
var layersList = [lyr_CD3AbsenteeTurnout_0];
lyr_CD3AbsenteeTurnout_0.set('fieldAliases', {'statefp': 'statefp', 'countyfp': 'countyfp', 'countyns': 'countyns', 'cntyidfp': 'cntyidfp', 'name': 'name', 'namelsad': 'namelsad', 'lsad': 'lsad', 'classfp': 'classfp', 'mtfcc': 'mtfcc', 'csafp': 'csafp', 'cbsafp': 'cbsafp', 'funcstat': 'funcstat', 'aland': 'aland', 'awater': 'awater', 'intptlat': 'intptlat', 'intptlon': 'intptlon', 'objectid': 'objectid', 'county_nam': 'county_nam', 'rfc_map': 'rfc_map', 'topo': 'topo', 'ok_history': 'ok_history', 'wikipedia': 'wikipedia', 'ac_land': 'ac_land', 'sqmi_land': 'sqmi_land', 'ac_water': 'ac_water', 'sqmi_water': 'sqmi_water', 'Data_COUNTY': 'Data_COUNTY', 'Data_N_TOTAL_': 'Absentee - Totals ', 'Data_N_T__': 'Turnout %', 'Data_DEMOCRAT': 'Democrat Votes', 'Data_DM__': 'Dem Turnout %', 'Data_REPUBLICAN': 'Republican Votes', 'Data_RP__': 'Rep Turnout %', 'Data_INDEPENDEN': 'Independent Votes', 'Data_IN__': 'Data_IN__', 'Data_LIBERTARIA': 'Libertarian Votes', 'Data_LB__': 'LIB Turnout %', });
lyr_CD3AbsenteeTurnout_0.set('fieldImages', {'statefp': 'Hidden', 'countyfp': 'Hidden', 'countyns': 'Hidden', 'cntyidfp': 'Hidden', 'name': 'TextEdit', 'namelsad': 'Hidden', 'lsad': 'Hidden', 'classfp': 'Hidden', 'mtfcc': 'Hidden', 'csafp': 'Hidden', 'cbsafp': 'Hidden', 'funcstat': 'Hidden', 'aland': 'Hidden', 'awater': 'Hidden', 'intptlat': 'Hidden', 'intptlon': 'Hidden', 'objectid': 'Hidden', 'county_nam': 'Hidden', 'rfc_map': 'Hidden', 'topo': 'Hidden', 'ok_history': 'Hidden', 'wikipedia': 'Hidden', 'ac_land': 'Hidden', 'sqmi_land': 'Hidden', 'ac_water': 'Hidden', 'sqmi_water': 'Hidden', 'Data_COUNTY': 'Hidden', 'Data_N_TOTAL_': 'Range', 'Data_N_T__': 'TextEdit', 'Data_DEMOCRAT': 'Range', 'Data_DM__': 'TextEdit', 'Data_REPUBLICAN': 'Range', 'Data_RP__': 'TextEdit', 'Data_INDEPENDEN': 'Range', 'Data_IN__': 'TextEdit', 'Data_LIBERTARIA': 'Range', 'Data_LB__': 'TextEdit', });
lyr_CD3AbsenteeTurnout_0.set('fieldLabels', {'name': 'header label', 'Data_N_TOTAL_': 'inline label', 'Data_N_T__': 'inline label', 'Data_DEMOCRAT': 'inline label', 'Data_DM__': 'inline label', 'Data_REPUBLICAN': 'inline label', 'Data_RP__': 'inline label', 'Data_INDEPENDEN': 'inline label', 'Data_IN__': 'inline label', 'Data_LIBERTARIA': 'inline label', 'Data_LB__': 'inline label', });
lyr_CD3AbsenteeTurnout_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});