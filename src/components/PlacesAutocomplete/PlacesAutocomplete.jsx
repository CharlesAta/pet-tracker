import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
    getZipCode
  } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
  } from "@reach/combobox"; 
  import "@reach/combobox/styles.css"
  import "./PlacesAutocomplete.css";
  import { MDBInput } from "mdbreact";
  import { Form } from "react-bootstrap";

export default function PlacesAutocomplete(props) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: () => 43.6532, lng: () => -79.3832 },
        radius: 100 * 1000,
      },
      debounce: 300,
    });

  
    const handleSelect =
      ({description}) => 
      () => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description })
        .then(async (results) => {
          try {
            let zipCode = await getZipCode(results[0])
            let {lat, lng} = await getLatLng(results[0])           
            console.log("ZIP Code: ", zipCode);
            if(!zipCode) {
              zipCode = props.user.postalCode
            }
            await props.setPetState({...props.petState, lat, lng, location: description, postalCode: zipCode})
          } catch(error) {
              console.log("😱 Error: ", error);
          };
        })
      };

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <>

    <Combobox hideCaret hideEmptyPopup style={{border: "none"}} className="form-control ml-0 mr-5" className="mb-3" onSelect={handleSelect} aria-labelledby="demo" >
       <ComboboxInput  style={{border: "none", borderBottom: "1px solid black"}} value={value} onChange={handleInput} disabled={!ready} placeholder="Postal Code, City, Landmarks..." />
       <ComboboxPopover >
         <ComboboxList>
           {status === "OK" &&
            renderSuggestions()}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>

    </>
  );
};


{/* <MDBInput
label="Last known location"
name="location"
icon="exclamation-circle deep-orange-text pr-3"
type="text"
value={props.petState.location}
onChange={props.handleChange}
containerClass="d-flex flex-row-reverse"
className="ml-0 mr-5"
labelClass="ml-0"
required
/> */}
