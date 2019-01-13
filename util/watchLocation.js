import { Notifications, Permissions } from 'expo';
import { Alert } from 'react-native'
// https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInMetersBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadius_m = 6371 * 1000;

    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);

    var lat1 = degreesToRadians(lat1);
    var lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius_m * c;
}

export default async function () {
    //todo CHECK FOR NOTIFICATION AND LOCATION PERMISSIONS
    // if (status === 'granted') {
        navigator.geolocation.watchPosition(
            res => {
                notificationworthyLocations = [{ name: 'work', latitude: 37.653270600000006, longitude: -121.01534759999998 }]//
                let distances = notificationworthyLocations.map(
                    loc => ({
                        name: loc.name,
                        distance: distanceInMetersBetweenEarthCoordinates(loc.latitude, loc.longitude, res.coords.latitude, res.coords.longitude)
                    })
                )
                let closeLocations = distances.filter(el => el.distance < 3218.69) // 2 miles
                for (let loc of closeLocations) {
                    Notifications.presentLocalNotificationAsync({
                        title: 'You are close to a special place!',
                        body: `You are close to ${loc.name} and are ${loc.distance} meters away.`
                    }, {
                            sound: true,
                        }
                    )
                }
            },
            err => Alert.alert('Error', JSON.stringify(err)),
            {
                enableHighAccuracy: true,
                distanceFilter: 1,
            },
        )
    // }
};