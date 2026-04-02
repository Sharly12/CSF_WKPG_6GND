ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5234").setExtent([90726.300977, 178073.228163, 117103.804088, 196428.950363]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kurunduwatta_1 = new ol.format.GeoJSON();
var features_Kurunduwatta_1 = format_Kurunduwatta_1.readFeatures(json_Kurunduwatta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Kurunduwatta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kurunduwatta_1.addFeatures(features_Kurunduwatta_1);
var lyr_Kurunduwatta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kurunduwatta_1, 
                style: style_Kurunduwatta_1,
                popuplayertitle: 'Kurunduwatta',
                interactive: true,
                title: '<img src="styles/legend/Kurunduwatta_1.png" /> Kurunduwatta'
            });
var format_WPKG_1_2 = new ol.format.GeoJSON();
var features_WPKG_1_2 = format_WPKG_1_2.readFeatures(json_WPKG_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_WPKG_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPKG_1_2.addFeatures(features_WPKG_1_2);
var lyr_WPKG_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPKG_1_2, 
                style: style_WPKG_1_2,
                popuplayertitle: 'WPKG_1',
                interactive: true,
                title: '<img src="styles/legend/WPKG_1_2.png" /> WPKG_1'
            });
var format_Dematagoda_3 = new ol.format.GeoJSON();
var features_Dematagoda_3 = format_Dematagoda_3.readFeatures(json_Dematagoda_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Dematagoda_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dematagoda_3.addFeatures(features_Dematagoda_3);
var lyr_Dematagoda_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dematagoda_3, 
                style: style_Dematagoda_3,
                popuplayertitle: 'Dematagoda',
                interactive: true,
                title: '<img src="styles/legend/Dematagoda_3.png" /> Dematagoda'
            });
var format_AluthKade_west_4 = new ol.format.GeoJSON();
var features_AluthKade_west_4 = format_AluthKade_west_4.readFeatures(json_AluthKade_west_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_AluthKade_west_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AluthKade_west_4.addFeatures(features_AluthKade_west_4);
var lyr_AluthKade_west_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AluthKade_west_4, 
                style: style_AluthKade_west_4,
                popuplayertitle: 'AluthKade_west',
                interactive: true,
                title: '<img src="styles/legend/AluthKade_west_4.png" /> AluthKade_west'
            });
var format_slaveIsland_5 = new ol.format.GeoJSON();
var features_slaveIsland_5 = format_slaveIsland_5.readFeatures(json_slaveIsland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_slaveIsland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slaveIsland_5.addFeatures(features_slaveIsland_5);
var lyr_slaveIsland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slaveIsland_5, 
                style: style_slaveIsland_5,
                popuplayertitle: 'slave Island',
                interactive: true,
                title: '<img src="styles/legend/slaveIsland_5.png" /> slave Island'
            });
var format_Thimbirigasyaya_6 = new ol.format.GeoJSON();
var features_Thimbirigasyaya_6 = format_Thimbirigasyaya_6.readFeatures(json_Thimbirigasyaya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Thimbirigasyaya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thimbirigasyaya_6.addFeatures(features_Thimbirigasyaya_6);
var lyr_Thimbirigasyaya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thimbirigasyaya_6, 
                style: style_Thimbirigasyaya_6,
                popuplayertitle: 'Thimbirigasyaya',
                interactive: true,
                title: '<img src="styles/legend/Thimbirigasyaya_6.png" /> Thimbirigasyaya'
            });
var format_optimized_route1optimized_route_7 = new ol.format.GeoJSON();
var features_optimized_route1optimized_route_7 = format_optimized_route1optimized_route_7.readFeatures(json_optimized_route1optimized_route_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_optimized_route1optimized_route_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_optimized_route1optimized_route_7.addFeatures(features_optimized_route1optimized_route_7);
var lyr_optimized_route1optimized_route_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_optimized_route1optimized_route_7, 
                style: style_optimized_route1optimized_route_7,
                popuplayertitle: 'optimized_route (1) — optimized_route',
                interactive: true,
                title: '<img src="styles/legend/optimized_route1optimized_route_7.png" /> optimized_route (1) — optimized_route'
            });
var format_optimized_visit_points1optimized_visit_points_8 = new ol.format.GeoJSON();
var features_optimized_visit_points1optimized_visit_points_8 = format_optimized_visit_points1optimized_visit_points_8.readFeatures(json_optimized_visit_points1optimized_visit_points_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_optimized_visit_points1optimized_visit_points_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_optimized_visit_points1optimized_visit_points_8.addFeatures(features_optimized_visit_points1optimized_visit_points_8);
var lyr_optimized_visit_points1optimized_visit_points_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_optimized_visit_points1optimized_visit_points_8, 
                style: style_optimized_visit_points1optimized_visit_points_8,
                popuplayertitle: 'optimized_visit_points (1) — optimized_visit_points',
                interactive: true,
                title: '<img src="styles/legend/optimized_visit_points1optimized_visit_points_8.png" /> optimized_visit_points (1) — optimized_visit_points'
            });
var group_LUs = new ol.layer.Group({
                                layers: [lyr_optimized_route1optimized_route_7,lyr_optimized_visit_points1optimized_visit_points_8,],
                                fold: 'open',
                                title: 'LUs'});

lyr_OSMStandard_0.setVisible(true);lyr_Kurunduwatta_1.setVisible(true);lyr_WPKG_1_2.setVisible(true);lyr_Dematagoda_3.setVisible(true);lyr_AluthKade_west_4.setVisible(true);lyr_slaveIsland_5.setVisible(true);lyr_Thimbirigasyaya_6.setVisible(true);lyr_optimized_route1optimized_route_7.setVisible(true);lyr_optimized_visit_points1optimized_visit_points_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kurunduwatta_1,lyr_WPKG_1_2,lyr_Dematagoda_3,lyr_AluthKade_west_4,lyr_slaveIsland_5,lyr_Thimbirigasyaya_6,group_LUs];
lyr_Kurunduwatta_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_WPKG_1_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Dematagoda_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_AluthKade_west_4.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_slaveIsland_5.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Thimbirigasyaya_6.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_optimized_route1optimized_route_7.set('fieldAliases', {'route_name': 'route_name', 'total_distance_m': 'total_distance_m', });
lyr_optimized_visit_points1optimized_visit_points_8.set('fieldAliases', {'name': 'name', 'lu': 'lu', 'id': 'id', 'graph_node': 'graph_node', 'snap_dist_m': 'snap_dist_m', 'display_label': 'display_label', 'component_id': 'component_id', 'visit_sequence': 'visit_sequence', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Kurunduwatta_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', });
lyr_WPKG_1_2.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', });
lyr_Dematagoda_3.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_AluthKade_west_4.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_slaveIsland_5.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_Thimbirigasyaya_6.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_optimized_route1optimized_route_7.set('fieldImages', {'route_name': 'TextEdit', 'total_distance_m': 'Range', });
lyr_optimized_visit_points1optimized_visit_points_8.set('fieldImages', {'name': 'TextEdit', 'lu': 'TextEdit', 'id': 'Range', 'graph_node': 'TextEdit', 'snap_dist_m': 'TextEdit', 'display_label': 'TextEdit', 'component_id': 'Range', 'visit_sequence': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Kurunduwatta_1.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DISTRICT_N': 'header label - visible with data', 'DSD_N': 'header label - visible with data', 'DSD_C': 'header label - visible with data', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - visible with data', 'GN_UID': 'header label - visible with data', 'OID_': 'header label - visible with data', 'UID_DIST_D': 'header label - visible with data', 'TOT_POP': 'header label - visible with data', 'RANK_POP': 'header label - visible with data', 'MALE': 'header label - visible with data', 'FEMALE': 'header label - visible with data', 'RATIOSEX': 'header label - visible with data', 'RANK_SR': 'header label - visible with data', '0TO14': 'header label - visible with data', '15TO59': 'header label - visible with data', 'OVER60': 'header label - visible with data', 'RATIODEPEN': 'header label - visible with data', 'RANK_DR': 'header label - visible with data', 'BUDDHIST': 'header label - visible with data', 'HINDU': 'header label - visible with data', 'ISLAM': 'header label - visible with data', 'ROMANCATHO': 'header label - visible with data', 'OTHERCHRIS': 'header label - visible with data', 'OTHERELIGI': 'header label - visible with data', 'SINHALESE': 'header label - visible with data', 'SRILANKATA': 'header label - visible with data', 'INDIANTAMI': 'header label - visible with data', 'SRILANKAMO': 'header label - visible with data', 'OTHERETHGR': 'header label - visible with data', 'NAME_DIST_': 'header label - visible with data', 'NUM_GN': 'header label - visible with data', 'Area': 'no label', });
lyr_WPKG_1_2.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DISTRICT_N': 'header label - visible with data', 'DSD_N': 'header label - visible with data', 'DSD_C': 'header label - visible with data', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - visible with data', 'GN_UID': 'header label - visible with data', 'OID_': 'header label - visible with data', 'UID_DIST_D': 'header label - visible with data', 'TOT_POP': 'header label - visible with data', 'RANK_POP': 'header label - visible with data', 'MALE': 'header label - visible with data', 'FEMALE': 'header label - visible with data', 'RATIOSEX': 'header label - visible with data', 'RANK_SR': 'header label - visible with data', '0TO14': 'header label - visible with data', '15TO59': 'header label - visible with data', 'OVER60': 'header label - visible with data', 'RATIODEPEN': 'header label - visible with data', 'RANK_DR': 'header label - visible with data', 'BUDDHIST': 'header label - visible with data', 'HINDU': 'header label - visible with data', 'ISLAM': 'header label - visible with data', 'ROMANCATHO': 'header label - visible with data', 'OTHERCHRIS': 'header label - visible with data', 'OTHERELIGI': 'header label - visible with data', 'SINHALESE': 'header label - visible with data', 'SRILANKATA': 'header label - visible with data', 'INDIANTAMI': 'header label - visible with data', 'SRILANKAMO': 'header label - visible with data', 'OTHERETHGR': 'header label - visible with data', 'NAME_DIST_': 'header label - visible with data', 'NUM_GN': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Dematagoda_3.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DISTRICT_N': 'header label - visible with data', 'DSD_N': 'header label - visible with data', 'DSD_C': 'header label - visible with data', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - visible with data', 'GN_UID': 'header label - visible with data', 'OID_': 'header label - visible with data', 'UID_DIST_D': 'header label - visible with data', 'TOT_POP': 'header label - visible with data', 'RANK_POP': 'header label - visible with data', 'MALE': 'header label - visible with data', 'FEMALE': 'header label - visible with data', 'RATIOSEX': 'header label - visible with data', 'RANK_SR': 'header label - visible with data', '0TO14': 'header label - visible with data', '15TO59': 'header label - visible with data', 'OVER60': 'header label - visible with data', 'RATIODEPEN': 'header label - visible with data', 'RANK_DR': 'header label - visible with data', 'BUDDHIST': 'header label - visible with data', 'HINDU': 'header label - visible with data', 'ISLAM': 'header label - visible with data', 'ROMANCATHO': 'header label - visible with data', 'OTHERCHRIS': 'header label - visible with data', 'OTHERELIGI': 'header label - visible with data', 'SINHALESE': 'header label - visible with data', 'SRILANKATA': 'header label - visible with data', 'INDIANTAMI': 'header label - visible with data', 'SRILANKAMO': 'header label - visible with data', 'OTHERETHGR': 'header label - visible with data', 'NAME_DIST_': 'header label - visible with data', 'NUM_GN': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_AluthKade_west_4.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DISTRICT_N': 'header label - visible with data', 'DSD_N': 'header label - visible with data', 'DSD_C': 'header label - visible with data', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - visible with data', 'GN_UID': 'header label - visible with data', 'OID_': 'header label - visible with data', 'UID_DIST_D': 'header label - visible with data', 'TOT_POP': 'header label - visible with data', 'RANK_POP': 'header label - visible with data', 'MALE': 'header label - visible with data', 'FEMALE': 'header label - visible with data', 'RATIOSEX': 'header label - visible with data', 'RANK_SR': 'header label - visible with data', '0TO14': 'header label - visible with data', '15TO59': 'header label - visible with data', 'OVER60': 'header label - visible with data', 'RATIODEPEN': 'header label - visible with data', 'RANK_DR': 'header label - visible with data', 'BUDDHIST': 'header label - visible with data', 'HINDU': 'header label - visible with data', 'ISLAM': 'header label - visible with data', 'ROMANCATHO': 'header label - visible with data', 'OTHERCHRIS': 'header label - visible with data', 'OTHERELIGI': 'header label - visible with data', 'SINHALESE': 'header label - visible with data', 'SRILANKATA': 'header label - visible with data', 'INDIANTAMI': 'header label - visible with data', 'SRILANKAMO': 'header label - visible with data', 'OTHERETHGR': 'header label - visible with data', 'NAME_DIST_': 'header label - visible with data', 'NUM_GN': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_slaveIsland_5.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DISTRICT_N': 'header label - visible with data', 'DSD_N': 'header label - visible with data', 'DSD_C': 'header label - visible with data', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - visible with data', 'GN_UID': 'header label - visible with data', 'OID_': 'header label - visible with data', 'UID_DIST_D': 'header label - visible with data', 'TOT_POP': 'header label - visible with data', 'RANK_POP': 'header label - visible with data', 'MALE': 'header label - visible with data', 'FEMALE': 'header label - visible with data', 'RATIOSEX': 'header label - visible with data', 'RANK_SR': 'header label - visible with data', '0TO14': 'header label - visible with data', '15TO59': 'header label - visible with data', 'OVER60': 'header label - visible with data', 'RATIODEPEN': 'header label - visible with data', 'RANK_DR': 'header label - visible with data', 'BUDDHIST': 'header label - visible with data', 'HINDU': 'header label - visible with data', 'ISLAM': 'header label - visible with data', 'ROMANCATHO': 'header label - visible with data', 'OTHERCHRIS': 'header label - visible with data', 'OTHERELIGI': 'header label - visible with data', 'SINHALESE': 'header label - visible with data', 'SRILANKATA': 'header label - visible with data', 'INDIANTAMI': 'header label - visible with data', 'SRILANKAMO': 'header label - visible with data', 'OTHERETHGR': 'header label - visible with data', 'NAME_DIST_': 'header label - visible with data', 'NUM_GN': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Thimbirigasyaya_6.set('fieldLabels', {'PROVINCE_N': 'header label - visible with data', 'DISTRICT_N': 'header label - visible with data', 'DSD_N': 'header label - visible with data', 'DSD_C': 'header label - visible with data', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - visible with data', 'GN_UID': 'header label - visible with data', 'OID_': 'header label - visible with data', 'UID_DIST_D': 'header label - visible with data', 'TOT_POP': 'header label - visible with data', 'RANK_POP': 'header label - visible with data', 'MALE': 'header label - visible with data', 'FEMALE': 'header label - visible with data', 'RATIOSEX': 'header label - visible with data', 'RANK_SR': 'header label - visible with data', '0TO14': 'header label - visible with data', '15TO59': 'header label - visible with data', 'OVER60': 'header label - visible with data', 'RATIODEPEN': 'header label - visible with data', 'RANK_DR': 'header label - visible with data', 'BUDDHIST': 'header label - visible with data', 'HINDU': 'header label - visible with data', 'ISLAM': 'header label - visible with data', 'ROMANCATHO': 'header label - visible with data', 'OTHERCHRIS': 'header label - visible with data', 'OTHERELIGI': 'header label - visible with data', 'SINHALESE': 'header label - visible with data', 'SRILANKATA': 'header label - visible with data', 'INDIANTAMI': 'header label - visible with data', 'SRILANKAMO': 'header label - visible with data', 'OTHERETHGR': 'header label - visible with data', 'NAME_DIST_': 'header label - visible with data', 'NUM_GN': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_optimized_route1optimized_route_7.set('fieldLabels', {'route_name': 'header label - visible with data', 'total_distance_m': 'header label - visible with data', });
lyr_optimized_visit_points1optimized_visit_points_8.set('fieldLabels', {'name': 'header label - visible with data', 'lu': 'header label - visible with data', 'id': 'header label - visible with data', 'graph_node': 'header label - visible with data', 'snap_dist_m': 'header label - visible with data', 'display_label': 'header label - visible with data', 'component_id': 'header label - visible with data', 'visit_sequence': 'header label - visible with data', 'longitude': 'header label - visible with data', 'latitude': 'header label - visible with data', });
lyr_optimized_visit_points1optimized_visit_points_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});