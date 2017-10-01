'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ReviewSchema = new Schema({
    newreviews: [{
      name: {
        type: String
      },
      text: {
        type: String
      },
      who: {
        type: String
      },
      path: {
        type: String
      }
    }]
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('newreviews', ReviewSchema);
