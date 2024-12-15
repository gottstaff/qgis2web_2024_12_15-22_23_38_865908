var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_bibliotecas_validadas_1 = new ol.format.GeoJSON();
var features_bibliotecas_validadas_1 = format_bibliotecas_validadas_1.readFeatures(json_bibliotecas_validadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bibliotecas_validadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bibliotecas_validadas_1.addFeatures(features_bibliotecas_validadas_1);
cluster_bibliotecas_validadas_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_bibliotecas_validadas_1
});
var lyr_bibliotecas_validadas_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_bibliotecas_validadas_1, 
                style: style_bibliotecas_validadas_1,
                popuplayertitle: 'bibliotecas_validadas',
                interactive: true,
                title: '<img src="styles/legend/bibliotecas_validadas_1.png" /> bibliotecas_validadas'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_bibliotecas_validadas_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_bibliotecas_validadas_1];
lyr_bibliotecas_validadas_1.set('fieldAliases', {'Nome': 'Nome', 'Niden': 'Niden', 'Validado': 'Validado', 'Latitude': 'Latitude', 'Lonxitude': 'Lonxitude', 'Concello': 'Concello', 'ID': 'ID', });
lyr_bibliotecas_validadas_1.set('fieldImages', {'Nome': 'TextEdit', 'Niden': 'TextEdit', 'Validado': 'TextEdit', 'Latitude': 'TextEdit', 'Lonxitude': 'TextEdit', 'Concello': 'TextEdit', 'ID': 'Range', });
lyr_bibliotecas_validadas_1.set('fieldLabels', {'Nome': 'header label - always visible', 'Niden': 'inline label - always visible', 'Validado': 'no label', 'Latitude': 'no label', 'Lonxitude': 'no label', 'Concello': 'inline label - always visible', 'ID': 'no label', });
lyr_bibliotecas_validadas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});