import React, { useState, useEffect } from "react";

const BusinessHoursSelector = () => {
  // Internal state for dateTime
  const [dateTime, setDateTime] = useState({
    dateBusiness: "",
    timeBusiness: "",
  });

  // Days of the week for selection
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // State for selected days
  const [selectedDays, setSelectedDays] = useState([]);

  // State for time values
  const [startTime, setStartTime] = useState("16:00");
  const [endTime, setEndTime] = useState("18:00");

  // Generate time options (24-hour format)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, "0");
      times.push(`${formattedHour}:00`);
      times.push(`${formattedHour}:30`);
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  // Handle day selection
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // Update dateTime when selections change
  useEffect(() => {
    // Format selected days
    const formatSelectedDays = () => {
      if (selectedDays.length === 0) return "";

      // Sort days based on the order in daysOfWeek
      const sortedDays = [...selectedDays].sort(
        (a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b)
      );

      return sortedDays.join(", ");
    };

    // Update dateTime state
    setDateTime({
      ...dateTime,
      dateBusiness: formatSelectedDays(),
      timeBusiness: `${startTime} - ${endTime}`,
    });
  }, [selectedDays, startTime, endTime]);

  // Log changes to dateTime (you can remove this in production)
  useEffect(() => {
    console.log("Updated dateTime:", dateTime);
  }, [dateTime]);

  return (
    <div className="mt-8 w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-4">
      {/* Days selection */}
      <div className="w-full lg:w-1/2">
        <div className="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
          Business hours<p>Day</p>
        </div>
        <div className="p-4 border-2 border-lightblue rounded-xl flex flex-wrap gap-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              type="button"
              className={`px-4 py-2 rounded-lg ${
                selectedDays.includes(day)
                  ?` bg-blue text-white`
                  : `border border-lightblue text-black`
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Display selected days (hidden visually but maintains form data) */}
        <input type="hidden" name="dateBusiness" value={dateTime.dateBusiness} />
      </div>

      {/* Time selection */}
      <div className="w-full lg:w-1/2">
        <div className="text-xl text-black font-semibold mb-2">Time</div>
        <div className="p-4 border-2 border-lightblue rounded-xl">
          <div className="flex justify-between mb-2">
            <div className="font-medium">Start</div>
            <div className="font-medium">End</div>
          </div>
          <div className="flex justify-between gap-4">
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-1/2 p-2 border rounded-lg bg-white"
            >
              {timeOptions.map((time) => (
                <option key={`start-${time}`} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-1/2 p-2 border rounded-lg bg-white"
            >
              {timeOptions.map((time) => (
                <option key={`end-${time}`} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display selected time (hidden visually but maintains form data) */}
        <input type="hidden" name="timeBusiness" value={dateTime.timeBusiness} />
      </div>

      {/* Add this section if you want to display the selected values */}
      <div className="mt-4 w-full">
        <p className="text-gray-600">
          Selected days: {dateTime.dateBusiness || "None"}
        </p>
        <p className="text-gray-600">Selected time: {dateTime.timeBusiness}</p>
      </div>
    </div>
  );
};

export default BusinessHoursSelector;