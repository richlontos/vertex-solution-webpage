import { Col, Row } from "react-bootstrap";
import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">

      <Row>
        <Col>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          # Of Dry Vans
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="dryVan"
            type="number"
            placeholder="# Of Dry Vans"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
        
        </Col>
        <Col>
        
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        # Of Reefers
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="# Of Reefers"
            placeholder="# Of Reefers"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        # Of Flat Beds
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="flatBed"
            type="number"
            placeholder="# Of Flat Beds"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
        
        </Col>
        <Col>
        
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        # Of Lowboys
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="lowboy"
            placeholder="# Of Lowboys"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        # Of Drop Decks
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="dropDeck"
            type="number"
            placeholder="# Of Drop Decks"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
        
        </Col>
        <Col>
        
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        Other
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="other"
            placeholder="Other"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
        </Col>
      </Row>
      <Row>
            <Col>

              <select
                style={{ "paddingLeft": "20px" }}
                name="hazmat"
                className="pickupAccesorials"
              >
                <option value="">Hazmat Endorsed?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>

              </select>
              <select
                style={{ "paddingLeft": "20px" }}
                name="satellite"
                className="pickupAccesorials"
              >
                <option value="">Sattelite Equipped?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>

              </select>
              <select
                style={{ "paddingLeft": "20px" }}
                name="dropTrailer"
                className="pickupAccesorials"
              >
                <option value="">Ability to Drop Trailers?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>

              </select>
            </Col>
          </Row>
    </div>
  );
}
