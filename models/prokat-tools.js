'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ToolsSchema = new Schema({
    section: {
      type: String
    },
    tools: [{
      name: {
        type: String
      },
      path: {
        type: String
      }
    }]
  });

mongoose.model('tools', ToolsSchema);