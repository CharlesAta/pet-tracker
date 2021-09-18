import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList
  } from "@reach/combobox"; 
  import "@reach/combobox/styles.css"
  import "./PlacesAutocomplete.css";
  import { MDBInput } from "mdbreact";

export default function PlacesAutocomplete(props) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
        location: { lat: () => 43.6532, lng: () => -79.3832 },
        radius: 100 * 1000,
      },
      debounce: 300,
    });
  
    const ref = useOnclickOutside(() => {
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleSelect =
      ({description}) => 
      () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);

        clearSuggestions();
        
        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
            console.log("📍 Coordinates: ", { lat, lng });            
            console.log("description", description)
            console.log("lat", lat )
            console.log("lng", lng )
            props.setPetState({...props.petState, lat, lng, location: description})
        })
        .catch((error) => {
            console.log("😱 Error: ", error);
        });
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
    <div ref={ref} className="mb-3">
    <Combobox style={{border: "none", margingBottom: "10%"}} className="form-control ml-0 mr-5" onSelect={handleSelect} aria-labelledby="demo">
       <ComboboxInput style={{border: "none", borderBottom: "1px solid black"}} value={value} onChange={handleInput} disabled={!ready} placeholder="Last seen location" />
       <ComboboxPopover >
         <ComboboxList>
           {status === "OK" &&
            renderSuggestions()}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
    </div>
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
