import React, {
  useState
} from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";


const defaultColumnProperties = {
};

const columns = [
  {
    key: "name",
    name: "Pokemon move"
  },
  {
    key: "url",
    name: "PokeURL"
  }
].map(c => ({
  ...c,
  ...defaultColumnProperties
}));

function getCellActions(column, row) {

  if (column.key === 'url') {

    return ([{
        icon: < span className = "icon-bell" /> ,
        callback: () => {

        }
      },
      {
        icon: "icon-cloud-download",
        actions: [{
            text: "Option 1",
            callback: () => {
              alert("Option 1 clicked");
            }
          },
          {
            text: "Option 2",
            callback: () => {
              alert("Option 2 clicked");
            }
          }
        ]
      }
    ]);

  }

}

const ROW_COUNT = 50;

function Example({
  rows
}) {
  return ( <div >
    <ReactDataGrid columns = {
      columns
    }
    rowGetter = {
      i => rows[i]
    }
    rowsCount = {
      ROW_COUNT
    }
    minHeight = {
      600
    }
    minColumnWidth = {
      45
    }

    getCellActions = {
      getCellActions
    }
    /> </div>
  );
}

export default Example;
