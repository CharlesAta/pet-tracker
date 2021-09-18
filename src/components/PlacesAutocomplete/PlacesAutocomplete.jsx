import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxOption,
    ComboboxList
  } from "@reach/combobox"; 
  import "@reach/combobox/styles.css"
  import "./PlacesAutocomplete.css";

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
      ({description }) => 
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
          })
          .catch((error) => {
            console.log("😱 Error: ", error);
          });
      };

    const handleInput = (e) => {
        console.log("handleInputevent", e)
        console.log(value)
        setValue(e.target.value);
        console.log(value)
        props.setPetState({...props.petState, location: value})
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
    const handleClick = (evt) => {
      handleInput(evt)
    }

  return (

    <Combobox onSelect={handleSelect} aria-labelledby="demo">
       <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
       <ComboboxPopover >
         <ComboboxList>
           {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} onClick={handleClick}/>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );

    // <div ref={ref}>
    // <Combobox>
    // <ComboboxInput
    //     value={value}
    //     onChange={handleInput}
    //     disabled={!ready}
    //     placeholder="Where are you going?"
    //   />
    //   <ComboboxPopover>
    //   {status === "OK" && <ul>{renderSuggestions()} </ul>}
    //   </ComboboxPopover>
    // </Combobox>
    // </div>
//     <div ref={ref}>
//     <Combobox onSelect={async (address) => {
//       setValue(address, false);
//       clearSuggestions();
//       try {
//         const results = await getGeocode({ address });
//         const { lat, lng } = await getLatLng(results[0]);
//         // panTo({ lat, lng });
//         // setMarkers((current) => [
//         //   ...current, {
//         //     lat,
//         //     lng,
//         //     time: new Date(),
//         //     submitted: false,
//         //   }
//         // ])
//       } catch (error) {
//         console.log("😱 Error: ", error);
//       }
//     }}>
//       <ComboboxInput className="combobox" value={value} onChange={(e) => {
//         setValue(e.target.value)
//       }} disabled={!ready} placeholder="Enter an address" />
//       <ComboboxPopover>
//         {status === "OK" &&
//           data.map(({ id, description }) => (
//             <ComboboxOption key={id} value={description} />
//           ))}
//       </ComboboxPopover>
//     </Combobox>
//   </div>


    // <Combobox onClick={handleSelect(suggestion)} aria-labelledby="demo">
    //   <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
    //   <ComboboxPopover>
    //     <ComboboxList>
    //       {status === "OK" &&
    //         data.map(({ place_id, description }) => (
    //           <ComboboxOption key={place_id} value={description} />
    //         ))}
    //     </ComboboxList>
    //   </ComboboxPopover>
    // </Combobox>
  
};

    {/* <Combobox onSelect={handleSelect} aria-labelledby="demo">
       <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
       <ComboboxPopover>
         <ComboboxList>
          {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox> */}





{/* <input
        value={value}
        onChange={handleInput}
        // disabled={!ready}
        placeholder="Where are you going?"
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>} */}





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
