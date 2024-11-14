const InputForm = (props) => {
    if (props.type === "Location") {
      return (
        <div className="w-full">
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out"
            placeholder={props.placeholder}
          >
            <option value="" disabled selected>
              Select Location
            </option>
            <option value="6th Phase JP Nagar">6th Phase JP Nagar</option>
            <option value="Koramangala">Koramangala</option>
            <option value="Indiranagar">Indiranagar</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Banaswadi">Banaswadi</option>
          </select>
        </div>
      );
    } else {
      return (
        <div className="w-full">
          <input
            type="text"
            placeholder={props.placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out"
          />
        </div>
      );
    }
  };
  
  export default InputForm;
  