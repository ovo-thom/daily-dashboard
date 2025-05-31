"use client";
import { useEffect, useState } from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiDayCloudy,
  WiNightAltCloudy,
  WiShowers,
  WiRain,
  WiSnow,
  WiFog,
  WiNa,
} from "react-icons/wi";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("API DATA", data);
            setWeather(data);
          })
          .catch((err) => console.error("Erreur fetch", err));
      },
      (error) => {
        console.error("Erreur de géolocalisation :", error);
      }
    );
  }, []);

  if (!weather) {
    return <div>Chargement...</div>;
  }

  const getWeatherIcon = (code) => {
    const map = {
      "01d": <WiDaySunny className="text-yellow-400 text-7xl" />,
      "01n": <WiNightClear className="text-blue-300 text-7xl" />,
      "02d": <WiDayCloudy className="text-yellow-300 text-7xl" />,
      "02n": <WiNightAltCloudy className="text-gray-300 text-7xl" />,
      "03d": <WiCloud className="text-gray-400 text-7xl" />,
      "03n": <WiCloud className="text-gray-500 text-7xl" />,
      "04d": <WiCloud className="text-gray-500 text-7xl" />,
      "04n": <WiCloud className="text-gray-600 text-7xl" />,
      "09d": <WiShowers className="text-blue-400 text-7xl" />,
      "09n": <WiShowers className="text-blue-500 text-7xl" />,
      "10d": <WiRain className="text-blue-500 text-7xl" />,
      "10n": <WiRain className="text-blue-600 text-7xl" />,
      "13d": <WiSnow className="text-white text-7xl" />,
      "13n": <WiSnow className="text-gray-200 text-7xl" />,
      "50d": <WiFog className="text-gray-400 text-7xl" />,
      "50n": <WiFog className="text-gray-500 text-7xl" />,
    };

    return map[code] || <WiNa className="text-gray-300 text-5xl" />;
  };

  const iconCode = weather.weather[0].icon;
  const temperature = Math.round(weather.main.temp);
  const description = weather.weather[0].description;

  return (
    <div className="col-span-1 md:col-span-2 bg-black/10 backdrop-blur-xl rounded-3xl text-gray-200 flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
        {weather.name}
      </h2>
      <div className="flex items-center justify-center space-x-4">
        {getWeatherIcon(iconCode)}
        <div className="text-xl">{temperature}°C</div>
      </div>
      <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
        {description}
      </p>
    </div>
    </div>
  );
}
