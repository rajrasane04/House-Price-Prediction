import InputForm from "./inputform";

const FinalForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 px-4 pt-16">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-10 my-6">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-5">
                Welcome to HousePricer&nbsp; &#10066; 
                </h1>
                <p className="text-center text-lg text-gray-600 mb-8">
                    Want to predict the price of a House? Try filling the details below:
                </p>
                
                {/* Input Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="block text-gray-700 mb-2">Select the Location:</label>
                        <InputForm type="Location" placeholder="Select a location" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Enter BHK:</label>
                        <InputForm type="BHK" placeholder="e.g 4" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Enter Number of Bathrooms:</label>
                        <InputForm type="Number of bathrooms" placeholder="e.g 3" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Enter Total Square Feet:</label>
                        <InputForm type="Square Feet" placeholder="e.g 2000" />
                    </div>
                </div>

                {/* Button */}
                <button 
                className="w-full px-4 py-3.5 text-sm font-medium text-white bg-slate-900 border  rounded-lg hover:bg-slate-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                >
                Predict Price
                </button>


                {/* Prediction Display */}
                <p className="text-center text-xl font-semibold text-gray-800 mt-6">
                    Prediction: ₹0.000
                </p>
            </div>
        </div>
    );
};

export default FinalForm;
