import Turnstone from 'turnstone'


export default function Searchbar() {

    const styles = {
        input: 'w-full h-12 py-2 border-b pl-10 pr-6 ease-in-out duration-300 text-lg outline-none ',
        inputFocus: 'w-full h-12 border-b -translate-y-2 ease-in-out duration-300 py-2 pl-10 pr-7 text-xl outline-none',
        query: 'text-oldsilver-800 placeholder-oldsilver-400',
        typeahead: 'text-crystal-500 border-white',
        cancelButton: `absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-crystal-600 inline-flex sm:hidden`,
        clearButton: 'absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300',
        listbox: 'w-full bg-white sm:border sm:border-crystal-500 sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl',
        groupHeading: 'cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-300',
        item: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-oldsilver-700',
        highlightedItem: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-oldsilver-700 rounded bg-crystal-100',
        match: 'font-semibold',
        noItems: 'cursor-default text-center my-20'
      }
      
    const maxItem = 5;

    const listbox = [
        {
          id: 'services',
          name: 'Services',
          ratio: 8,
          displayField: 'name',
          data: [
            { id: 1, name: 'Clean Clothes' },
            { id: 2, name: 'Repair AC' },
            { id: 3, name: 'Repair TV' },
          ],
          searchType: 'startsWith',
        },
        {
            id: 'departments',
            name: 'Departments',
            ratio: 2,
            displayField: 'name',
            data: [
                { id: 1, name: 'Laundry' },
                { id: 2, name: 'Housekeeping' },
                { id: 3, name: 'Maintenance' },
            ],
            searchType: 'contains',
        }
      ]
      

    return (
            <Turnstone
                placeholder="Search for services"
                listbox={listbox}
                styles={styles}
                maxItems={maxItem}
                autoFocus={true}
                debounce={100}
                id="searchbar"
                listboxIsImmuteable={true}
                matchText={true}
            />
    )
}