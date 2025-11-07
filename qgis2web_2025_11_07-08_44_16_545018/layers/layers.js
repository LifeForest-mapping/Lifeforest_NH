var wms_layers = [];

var format_wetlandsall_0 = new ol.format.GeoJSON();
var features_wetlandsall_0 = format_wetlandsall_0.readFeatures(json_wetlandsall_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wetlandsall_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wetlandsall_0.addFeatures(features_wetlandsall_0);
var lyr_wetlandsall_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wetlandsall_0, 
                style: style_wetlandsall_0,
                popuplayertitle: 'wetlandsall',
                interactive: false,
                title: '<img src="styles/legend/wetlandsall_0.png" /> wetlandsall'
            });
var format_Areas_1 = new ol.format.GeoJSON();
var features_Areas_1 = format_Areas_1.readFeatures(json_Areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_1.addFeatures(features_Areas_1);
var lyr_Areas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_1, 
                style: style_Areas_1,
                popuplayertitle: 'Areas',
                interactive: false,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_1_0.png" /> trees<br />\
    <img src="styles/legend/Areas_1_1.png" /> parking<br />\
    <img src="styles/legend/Areas_1_2.png" /> forest<br />' });
var format_vitals2024_2 = new ol.format.GeoJSON();
var features_vitals2024_2 = format_vitals2024_2.readFeatures(json_vitals2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vitals2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vitals2024_2.addFeatures(features_vitals2024_2);
var lyr_vitals2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vitals2024_2, 
                style: style_vitals2024_2,
                popuplayertitle: 'vitals2024',
                interactive: true,
    title: 'vitals2024<br />\
    <img src="styles/legend/vitals2024_2_0.png" /> NotAvail<br />\
    <img src="styles/legend/vitals2024_2_1.png" /> 7x7<br />\
    <img src="styles/legend/vitals2024_2_2.png" /> 15x15<br />\
    <img src="styles/legend/vitals2024_2_3.png" /> Trails<br />\
    <img src="styles/legend/vitals2024_2_4.png" /> <br />' });
var format_TrailNames_3 = new ol.format.GeoJSON();
var features_TrailNames_3 = format_TrailNames_3.readFeatures(json_TrailNames_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrailNames_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrailNames_3.addFeatures(features_TrailNames_3);
var lyr_TrailNames_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrailNames_3, 
                style: style_TrailNames_3,
                popuplayertitle: 'TrailNames',
                interactive: true,
                title: '<img src="styles/legend/TrailNames_3.png" /> TrailNames'
            });

lyr_wetlandsall_0.setVisible(true);lyr_Areas_1.setVisible(true);lyr_vitals2024_2.setVisible(true);lyr_TrailNames_3.setVisible(true);
var layersList = [lyr_wetlandsall_0,lyr_Areas_1,lyr_vitals2024_2,lyr_TrailNames_3];
lyr_wetlandsall_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'WETLANDY/N': 'WETLANDY/N', 'SIZE': 'SIZE', 'INCONSERVE': 'INCONSERVE', 'ACRES': 'ACRES', });
lyr_Areas_1.set('fieldAliases', {'fid': 'fid', 'REGIONS': 'REGIONS', 'id': 'id', 'treeplant': 'treeplant', 'maparea': 'maparea', });
lyr_vitals2024_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'DATE': 'DATE', 'plotsize': 'plotsize', 'Tree': 'Tree', 'BirthDate': 'BirthDate', 'DeathDate': 'DeathDate', 'PlantDate': 'PlantDate', 'Fullname': 'Fullname', 'Available': 'Available', 'FieldMark': 'FieldMark', 'LastName': 'LastName', 'Purchaser': 'Purchaser', 'Need': 'Need', 'PlotDiam': 'PlotDiam', 'Season': 'Season', 'Purc_last': 'Purc_last', 'BurialAreas': 'BurialAreas', 'lat_long': 'lat_long', 'lat_long5': 'lat_long5', 'GridID_updated': 'GridID_updated', });
lyr_TrailNames_3.set('fieldAliases', {'fid': 'fid', 'TrailName': 'TrailName', 'grove': 'grove', });
lyr_wetlandsall_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'WETLANDY/N': 'TextEdit', 'SIZE': 'TextEdit', 'INCONSERVE': 'TextEdit', 'ACRES': 'TextEdit', });
lyr_Areas_1.set('fieldImages', {'fid': 'TextEdit', 'REGIONS': 'TextEdit', 'id': 'TextEdit', 'treeplant': 'TextEdit', 'maparea': 'Range', });
lyr_vitals2024_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'DATE': 'DateTime', 'plotsize': 'ValueMap', 'Tree': 'TextEdit', 'BirthDate': 'DateTime', 'DeathDate': 'DateTime', 'PlantDate': 'DateTime', 'Fullname': 'TextEdit', 'Available': 'ValueMap', 'FieldMark': 'TextEdit', 'LastName': 'TextEdit', 'Purchaser': 'TextEdit', 'Need': 'ValueMap', 'PlotDiam': 'TextEdit', 'Season': 'Range', 'Purc_last': 'TextEdit', 'BurialAreas': 'TextEdit', 'lat_long': 'TextEdit', 'lat_long5': 'TextEdit', 'GridID_updated': 'TextEdit', });
lyr_TrailNames_3.set('fieldImages', {'fid': 'TextEdit', 'TrailName': 'TextEdit', 'grove': 'CheckBox', });
lyr_wetlandsall_0.set('fieldLabels', {'fid': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'WETLANDY/N': 'inline label - visible with data', 'SIZE': 'inline label - visible with data', 'INCONSERVE': 'inline label - visible with data', 'ACRES': 'inline label - visible with data', });
lyr_Areas_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'REGIONS': 'inline label - visible with data', 'id': 'inline label - visible with data', 'treeplant': 'inline label - visible with data', 'maparea': 'inline label - visible with data', });
lyr_vitals2024_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'DATE': 'no label', 'plotsize': 'no label', 'Tree': 'no label', 'BirthDate': 'no label', 'DeathDate': 'no label', 'PlantDate': 'no label', 'Fullname': 'no label', 'Available': 'no label', 'FieldMark': 'no label', 'LastName': 'no label', 'Purchaser': 'no label', 'Need': 'no label', 'PlotDiam': 'no label', 'Season': 'no label', 'Purc_last': 'no label', 'BurialAreas': 'no label', 'lat_long': 'no label', 'lat_long5': 'no label', 'GridID_updated': 'no label', });
lyr_TrailNames_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'TrailName': 'inline label - visible with data', 'grove': 'inline label - visible with data', });
lyr_TrailNames_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});