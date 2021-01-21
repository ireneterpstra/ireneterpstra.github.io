import React, { Component } from "react";
import {MnistData} from './data.js';
import * as tf from '@tensorflow/tfjs';
import update from 'immutability-helper';

const model = () => {
  const model = tf.sequential();
  
  const IMAGE_WIDTH = 28;
  const IMAGE_HEIGHT = 28;
  const IMAGE_CHANNELS = 1; 
  model.add(tf.layers.conv2d({
    inputShape: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
    kernelSize: 5,
    filters: 8,
    strides: 1,
    activation: 'relu',
    kernelInitializer: 'varianceScaling'
  }));

  // The MaxPooling layer acts as a sort of downsampling using max values
  // in a region instead of averaging.  
  model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));
  
  // Repeat another conv2d + maxPooling stack. 
  // Note that we have more filters in the convolution.
  model.add(tf.layers.conv2d({
    kernelSize: 5,
    filters: 16,
    strides: 1,
    activation: 'relu',
    kernelInitializer: 'varianceScaling'
  }));
  model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));
  
  // Now we flatten the output from the 2D filters into a 1D vector to prepare
  // it for input into our last layer. This is common practice when feeding
  // higher dimensional data to a final classification output layer.
  model.add(tf.layers.flatten());

  // Our last layer is a dense layer which has 10 output units, one for each
  // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
  const NUM_OUTPUT_CLASSES = 10;
  model.add(tf.layers.dense({
    units: NUM_OUTPUT_CLASSES,
    kernelInitializer: 'varianceScaling',
    activation: 'softmax'
  }));

  
  // Choose an optimizer, loss function and accuracy metric,
  // then compile and return the model
  const optimizer = tf.train.adam();
  model.compile({
    optimizer: optimizer,
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  return model;

}

async function train(model, data) {
  const metrics = ['loss', 'val_loss', 'acc', 'val_acc'];
  const container = {
    name: 'Model Training', tab: 'Model', styles: { height: '1000px' }
  };
  const fitCallbacks = tfvis.show.fitCallbacks(container, metrics);
  
  const BATCH_SIZE = 512;
  const TRAIN_DATA_SIZE = 5500;
  const TEST_DATA_SIZE = 1000;

  const [trainXs, trainYs] = tf.tidy(() => {
    const d = data.nextTrainBatch(TRAIN_DATA_SIZE);
    return [
      d.xs.reshape([TRAIN_DATA_SIZE, 28, 28, 1]),
      d.labels
    ];
  });

  const [testXs, testYs] = tf.tidy(() => {
    const d = data.nextTestBatch(TEST_DATA_SIZE);
    return [
      d.xs.reshape([TEST_DATA_SIZE, 28, 28, 1]),
      d.labels
    ];
  });

  return model.fit(trainXs, trainYs, {
    batchSize: BATCH_SIZE,
    validationData: [testXs, testYs],
    epochs: 10,
    shuffle: true,
    callbacks: fitCallbacks
  });
}

 

class script extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
        // <div>
      //     <div className="train-controls">
      //         <h2 className="section">Training Data (x,y) pairs</h2>
      //         <div className="row labels">
      //             <div className="field-label column">X</div>
      //             <div className="field-label column">Y</div>
      //         </div>

      //         {valuePairsState.map((val, index) => {
      //             return (
      //                 <div key={index} className="row">
      //                     <input
      //                         className="field field-x column"
      //                         value={val.x}
      //                         name="x"
      //                         data-index={index}
      //                         onChange={handleValuePairChange}
      //                         type="number" pattern="[0-9]*" />
      //                     <input
      //                         className="field field-y column"
      //                         value={val.y}
      //                         name="y"
      //                         data-index={index}
      //                         onChange={handleValuePairChange}
      //                         type="number" />
      //                 </div>
      //             );
      //         })}

      //         <button
      //             className="button-add-example button--green"
      //             onClick={handleAddItem}>
      //             +
      //         </button>
      //         <button
      //             className="button-train button--green"
      //             onClick={handleTrainModel}>
      //             Train
      //         </button>
      //     </div>
      //     <div className="predict-controls">
      //         <h2 className="section">Predicting</h2>
      //         <input
      //             className="field element"
      //             value={modelState.valueToPredict}
      //             name="valueToPredict"
      //             onChange={handleModelChange}
      //             type="number"
      //             placeholder="Enter an integer number" /><br />
      //         <div className="element">
      //             {modelState.predictedValue}
      //         </div>
      //         <button
      //             className="element button--green"
      //             onClick={handlePredict}
      //             disabled={!modelState.trained}>
      //             Predict
      //         </button>
      //     </div>
      // </div>
      <p>Hello</p>
      
    );
  }
}
  
  export default script;

