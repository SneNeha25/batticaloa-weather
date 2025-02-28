import { IoIosThunderstorm, IoIosWarning, IoIosWater, IoMdSpeedometer } from 'react-icons/io';
import { IoIosPartlySunny } from 'react-icons/io';

const Map = () => {
  return (
    <div className="flex container mx-auto mt-24">
      <div className="w-1/2 pr-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.81536310977!2d79.81500565289788!3d6.921836877837569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1740641168129!5m2!1sen!2slk"
          width="100%"
          height="450"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>

      <div className="w-1/2 pl-4">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-teal-700 mb-4">Weather Update</h2>

          <div className="flex items-center mb-4">
            <IoIosThunderstorm className="text-gray-700 mr-2" size={26} />
            <p className="text-gray-700">
              Showers or thundershowers will occur at times in Northern, North-central, Eastern and Uva provinces and in
              Matale, Nuwara-Eliya and Hambantota districts.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <IoIosPartlySunny className="text-gray-700 mr-2" size={26} />
            <p className="text-gray-700">
              Showers or thundershowers will occur at several places elsewhere during the afternoon or night.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <IoIosWater className="text-gray-700 mr-2" size={26} />
            <p className="text-gray-700">
              Fairly heavy showers <span className="font-semibold">above 75mm</span> can be expected at some places in
              Eastern and Uva provinces and in Matale, Nuwara-Eliya, Polonnaruwa, Galle, Matara, Kaluthara and
              Rathnapura districts.
            </p>
          </div>

          <div className="flex items-center mb-4">
            <IoMdSpeedometer className="text-gray-700 mr-2" size={26} />
            <p className="text-gray-700">
              Fairly strong winds of <span className="font-semibold">(30-40) kmph</span> can be expected at times over
              Northern, North-central, Eastern and North-western provinces and in Matale, Nuwara-Eliya and Hambantota
              districts.
            </p>
          </div>

          <div className="flex items-center mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <IoIosWarning className="text-yellow-600 mr-2" size={24} />
            <p className="text-gray-700 font-medium">
              The general public is kindly requested to take adequate precautions to minimize damages caused by
              temporary localized strong winds and lightning during thundershowers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
