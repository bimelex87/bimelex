import { AppRegistry} from 'react-native'

import WeatherProject from "./Weather/WeatherProject";
/*import WeatherProjectPart1 from "./WeatherProject_Part1";
import WeatherProjectPart2 from "./WeatherProject_Part2";
import WeatherProjectPart3 from "./WeatherProject_Part3";*/

import SimpleList from "./Book/SimpleList";
import BookListV2 from "./Book/BookListV2";

import Mondrian from "./Mondrian/Mondrian";

import SmarterWeather from "./Smarter_Weather/WeatherProject";

export default Mondrian;

AppRegistry.registerComponent('TestNavigation_2', ()=> SmarterWeather);