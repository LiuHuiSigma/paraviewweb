import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import jsonData from 'tonic-arctic-sample-data/data/probe/index.json';

import ImageBuilder from '../../../../Rendering/Image/DataProberImageBuilder';
import LookupTableManager from '../../../../Common/Core/LookupTableManager';
import Probe3DViewer from '..';
import QueryDataModel from '../../../../IO/Core/QueryDataModel';

const bodyElement = document.querySelector('.content');

// Fix dimension
jsonData.metadata.dimensions = [50, 50, 50];
const dataModel = new QueryDataModel(jsonData, `${__BASE_PATH__}/data/probe/`);

ReactDOM.render(
  React.createElement(Probe3DViewer, {
    queryDataModel: dataModel,
    imageBuilder: new ImageBuilder(dataModel, new LookupTableManager()),
    probe: true,
  }),
  bodyElement
);

setImmediate(() => {
  dataModel.fetchData();
});
