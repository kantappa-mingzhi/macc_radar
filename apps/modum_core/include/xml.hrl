%% HRL file generated by ERLSOM
%%
%% It is possible (and in some cases necessary) to change the name of
%% the record fields.
%%
%% It is possible to add default values, but be aware that these will
%% only be used when *writing* an xml document.


-type anyAttrib()  :: {{string(),    %% name of the attribute
                        string()},   %% namespace
                       string()}.    %% value

-type anyAttribs() :: [anyAttrib()] | undefined.

%% xsd:QName values are translated to #qname{} records.
-record(qname, {uri :: string(),
                localPart :: string(),
                prefix :: string(),
                mappedPrefix :: string()}).



-record('GPSshape', {anyAttribs :: anyAttribs(),
	'GPSshape' :: string()}).

-type 'GPSshape'() :: #'GPSshape'{}.


-record(roadType, {anyAttribs :: anyAttribs(),
	roadType :: string()}).

-type roadType() :: #roadType{}.


-record(linkDesc, {anyAttribs :: anyAttribs(),
	linkDesc :: string()}).

-type linkDesc() :: #linkDesc{}.


-record(nodeDesc, {anyAttribs :: anyAttribs(),
	nodeDesc :: string()}).

-type nodeDesc() :: #nodeDesc{}.


-record(lon, {anyAttribs :: anyAttribs(),
	lon :: string()}).

-type lon() :: #lon{}.


-record(lat, {anyAttribs :: anyAttribs(),
	lat :: string()}).

-type lat() :: #lat{}.


-record(shape, {anyAttribs :: anyAttribs(),
	shape :: string()}).

-type shape() :: #shape{}.


-record(flow, {anyAttribs :: anyAttribs(),
	flow :: string()}).

-type flow() :: #flow{}.


-record(maxSpeed, {anyAttribs :: anyAttribs(),
	maxSpeed :: string()}).

-type maxSpeed() :: #maxSpeed{}.


-record(avgSpeed, {anyAttribs :: anyAttribs(),
	avgSpeed :: string()}).

-type avgSpeed() :: #avgSpeed{}.


-record(density, {anyAttribs :: anyAttribs(),
	density :: string()}).

-type density() :: #density{}.


-record(co2emissions, {anyAttribs :: anyAttribs(),
	co2emissions :: string()}).

-type co2emissions() :: #co2emissions{}.


-record(length, {anyAttribs :: anyAttribs(),
	length :: string()}).

-type length() :: #length{}.


-record(numLanes, {anyAttribs :: anyAttribs(),
	numLanes :: integer()}).

-type numLanes() :: #numLanes{}.


-record(id, {anyAttribs :: anyAttribs(),
	id :: string()}).

-type id() :: #id{}.


-record(userResponse, {anyAttribs :: anyAttribs(),
	userId :: string()}).

-type userResponse() :: #userResponse{}.


-record(userRequest, {anyAttribs :: anyAttribs(),
	userId :: string(),
	origin :: string(),
	destination :: string(),
	path :: pathType()}).

-type userRequest() :: #userRequest{}.


-record(forecastResponse, {anyAttribs :: anyAttribs(),
	link :: [linkForecastType()]}).

-type forecastResponse() :: #forecastResponse{}.


-record(forecastRequest, {anyAttribs :: anyAttribs(),
	timeWindow :: string()}).

-type forecastRequest() :: #forecastRequest{}.


-record(pathType, {anyAttribs :: anyAttribs(),
	id :: [string()]}).

-type pathType() :: #pathType{}.


-record(linkForecastType, {anyAttribs :: anyAttribs(),
	id :: string(),
	interval :: [forecastIntervalType()]}).

-type linkForecastType() :: #linkForecastType{}.


-record(forecastIntervalType, {anyAttribs :: anyAttribs(),
	timeStart :: string(),
	timeStop :: string(),
	travelTime :: string()}).

-type forecastIntervalType() :: #forecastIntervalType{}.


-record(updateResponse, {anyAttribs :: anyAttribs(),
	id :: string(),
	map :: mapInformationType(),
	ok :: boolean(),
	extrastatus :: string()}).

-type updateResponse() :: #updateResponse{}.


-record(updateRequest, {anyAttribs :: anyAttribs(),
	id :: string(),
	mapCommand :: string(),
	commandString :: string()}).

-type updateRequest() :: #updateRequest{}.


-record(mapInformationType, {anyAttribs :: anyAttribs(),
	name :: string(),
	version :: string(),
	link :: [linkInformationType()]}).

-type mapInformationType() :: #mapInformationType{}.


-record(topologyMap, {anyAttribs :: anyAttribs(),
	name :: string(),
	version :: string(),
	link :: [linkType()],
	node :: [nodeType()]}).

-type topologyMap() :: #topologyMap{}.


-record(coordinatesType, {anyAttribs :: anyAttribs(),
	lat :: string(),
	lon :: string()}).

-type coordinatesType() :: #coordinatesType{}.


-record(nodeType, {anyAttribs :: anyAttribs(),
	id :: string(),
	nodeDesc :: string(),
	linkPair :: [linkPairType()],
	coordinates :: [coordinatesType()]}).

-type nodeType() :: #nodeType{}.


-record(linkPairType, {anyAttribs :: anyAttribs(),
	idfrom :: string() | undefined,
	idto :: string() | undefined}).

-type linkPairType() :: #linkPairType{}.


-record(linkInformationType, {anyAttribs :: anyAttribs(),
	id :: string(),
	co2emissions :: string(),
	density :: string(),
	avgSpeed :: string(),
	flow :: string()}).

-type linkInformationType() :: #linkInformationType{}.


-record(linkType, {anyAttribs :: anyAttribs(),
	id :: string(),
	numLanes :: integer(),
	length :: string(),
	maxSpeed :: string(),
	shape :: string(),
	'GPSshape' :: string(),
	coordinates :: [coordinatesType()],
	linkDesc :: string(),
	roadType :: string(),
	foot :: boolean(),
	cycle :: boolean()}).

-type linkType() :: #linkType{}.