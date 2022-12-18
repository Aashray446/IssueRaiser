import Turnstone from 'turnstone'
import { useMemo, Component } from 'react';
class Searchbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patientData: props.patientData,
    }
  }

  handleChange = (data) => {
    this.props.onPatientChange(data);
    console.log(data);
  }

    styles = {
        input: 'w-full h-12 py-2 border-b pl-2 pr-6 ease-in-out duration-300 text-sm text-gray-900 outline-none ',
        inputFocus: 'w-full h-12 border-b -translate-y-2 ease-in-out duration-300 py-2 pl-2 pr-7 text-md outline-none',
        query: 'placeholder-oldsilver-400',
        typeahead: 'border-white',
        cancelButton: `absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-crystal-600 inline-flex sm:hidden`,
        clearButton: 'absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300',
        listbox: 'w-full bg-white border-x-2 border-b-2 sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl',
        groupHeading: 'cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-300',
        item: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden',
        highlightedItem: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden rounded bg-crystal-100',
        match: 'font-medium',
        noItems: 'cursor-default text-center my-20'
      }
      
    maxItem = 5;

    listbox = [
        {
          id: 'services',
          name: 'Services',
          ratio: 8,
          displayField: 'name',
          data: [
            { id: 1, name: 'Clean Clothes', department: 'laundry'},
            { id: 2, name: 'Repair AC', department: 'maintenance' },
            { id: 3, name: 'Repair TV', department: 'maintenance' },
          ],
          searchType: 'startsWith',
        },
        {
            id: 'departments',
            name: 'Departments',
            ratio: 2,
            displayField: 'name',
            data: [
                { id: 1, name: 'laundry' },
                { id: 2, name: 'housekeeping' },
                { id: 3, name: 'maintenance' },
            ],
            searchType: 'contains',
        }
      ]
      

      render() {
        return (
    
                <Turnstone
                    placeholder="Search for services"
                    listbox={this.listbox}
                    styles={this.styles}
                    maxItems={this.maxItem}
                    autoFocus={true}
                    debounce={100}
                    id="searchbar"
                    listboxIsImmuteable={true}
                    matchText={true}
                    onSelect={this.handleChange}
    
                />
        )
      }
    
}
export default Searchbar;