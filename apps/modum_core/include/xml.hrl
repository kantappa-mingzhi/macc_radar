%% HRL file generated by ERLSOM
%%
%% It is possible to change the name of the record fields.
%%
%% It is possible to add default values, but be aware that these will
%% only be used when *writing* an xml document.

-record('roadType', {anyAttribs, 'roadType'}).
-record('linkDesc', {anyAttribs, 'linkDesc'}).
-record('nodeDesc', {anyAttribs, 'nodeDesc'}).
-record('lon', {anyAttribs, 'lon'}).
-record('lat', {anyAttribs, 'lat'}).
-record('shape', {anyAttribs, 'shape'}).
-record('flow', {anyAttribs, 'flow'}).
-record('maxSpeed', {anyAttribs, 'maxSpeed'}).
-record('avgSpeed', {anyAttribs, 'avgSpeed'}).
-record('density', {anyAttribs, 'density'}).
-record('co2emissions', {anyAttribs, 'co2emissions'}).
-record('length', {anyAttribs, 'length'}).
-record('numLanes', {anyAttribs, 'numLanes'}).
-record('id', {anyAttribs, 'id'}).
-record('userResponse', {anyAttribs, 'userId'}).
-record('userRequest', {anyAttribs, 'userId', 'origin', 'destination', 'path'}).
-record('forecastResponse', {anyAttribs, 'link'}).
-record('forecastRequest', {anyAttribs, 'timeWindow'}).
-record('pathType', {anyAttribs, 'id'}).
-record('linkForecastType', {anyAttribs, 'id', 'interval'}).
-record('forecastIntervalType', {anyAttribs, 'timeStart', 'timeStop', 'travelTime'}).
-record('updateResponse', {anyAttribs, 'id', 'map', 'ok', 'extrastatus'}).
-record('updateRequest', {anyAttribs, 'id', 'mapCommand', 'commandString'}).
-record('mapInformationType', {anyAttribs, 'name', 'version', 'link'}).
-record('topologyMap', {anyAttribs, 'name', 'version', 'link', 'node'}).
-record('nodeType', {anyAttribs, 'id', 'nodeDesc', 'linkPair', 'lat', 'lon'}).
-record('linkPairType', {anyAttribs, 'idfrom', 'idto'}).
-record('linkInformationType', {anyAttribs, 'id', 'co2emissions', 'density', 'avgSpeed', 'flow'}).
-record('linkType', {anyAttribs, 'id', 'numLanes', 'length', 'maxSpeed', 'shape', 'linkDesc', 'roadType'}).
