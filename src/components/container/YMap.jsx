import React from 'react';
// import './Map.css'
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';

const places = [
  {
    lat: 59.942,
    long: 30.35,
    availablePeople: '+3',
    iconCaption: 'ololo',
    comment: 'This is balloon loaded by the Yandex.Maps API module system',
  },
  {
    lat: 59.94,
    long: 30.35,
    availablePeople: '+5',
    iconCaption: 'ololo',
    comment: 'This is balloon loaded by the Yandex.Maps API module system',
  },
  {
    lat: 59.94,
    long: 30.355,
    availablePeople: '+6',
    iconCaption: 'ololo',
    comment: 'This is balloon loaded by the Yandex.Maps API module system',
  }
]


const YMap = () => {
  const [zoom, setZoom] = React.useState(12)
  const [center, setCenter] = React.useState(
    [59.94, 30.35],
  )
  const mapState = React.useMemo(() => ({ center, zoom }), [
    zoom,
  ])

  const onLoadMap = (inst) => {
    var location = window.ymaps.geolocation.get(
      { mapStateAutoApply: true },
    )
    console.log('ymaps  ', window.ymaps)
    // Асинхронная обработка ответа.
    location.then(
      function (result) {
        // Добавление местоположения на карту.
        console.log('location ', result)
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
          balloonContentBody: 'Мое местоположение'
        });
        inst.geoObjects.add(result.geoObjects);
      },
      function (err) {
        console.log('Ошибка: ' + err)
      },
    )
  }

  return <YMaps query={{
    apikey: 'e12fbfb2-d230-4887-9d91-36b182f3a8aa',
  }}>
    <Map
      width='100%'
      // height='100%'
      modules={["geolocation", "geocode"]}
      onLoad={(inst) => onLoadMap(inst)}
      // className='map-container'
      state={mapState}
    >
      <Clusterer
        options={{
          preset: 'islands#invertedVioletClusterIcons',
          groupByCoordinates: false,
        }}
      >
        {places.map((place, index) => (
          <Placemark
            key={index}
            modules={['geoObject.addon.balloon']}
            defaultGeometry={[place.lat, place.long]}
            properties={{
              iconContent: place.availablePeople,
              iconCaption: 'ololo',
              balloonContentBody: place.comment
            }}
            options={{
              preset: 'islands#yellowStretchyIcon',
            }}
          />
        ))}
      </Clusterer>
    </Map>
    {/* <button onClick={() => setZoom(zoom => (zoom === 9 ? 12 : 9))}>
      Toggle map zoom
    </button> */}
  </YMaps>
}


export default YMap