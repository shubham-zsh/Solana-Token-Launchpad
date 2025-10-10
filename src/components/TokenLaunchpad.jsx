
export function TokenLaunchpad() {

    function createToken() {
        
        const name = document.getElementById("name").value;
        const symbol = document.getElementById("symbol").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const initialSupply = document.getElementById("initialSupply").value;

    }

    return <div>
        <input id="name" type="text" placeholder="Token Name" class="w-110 p-4 border mt-20 placeholder-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br />

        <input id="symbol" type="text" placeholder="Symbol" class="w-110 p-4 border mt-10 placeholder-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br />

        <input id="imageUrl" type="text" placeholder="Image Url" class="w-110 p-4 border mt-10 placeholder-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br />

        <input id="initialSupply" type="text" placeholder="Initial supply" class="w-110 p-4 border mt-10 placeholder-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input><br />

        <button onClick={createToken} type="button" className="bg-green-500 mt-10 px-10 py-3 text-black-bold font-semibold font-sans">Create</button>

    </div>
}