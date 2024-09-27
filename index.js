const { ServiceBusClient } = require("@azure/service-bus");

const claim = {
  claimid: 123,
  area: 100
};

const connectionString = 'faytoward.servicebus.windows.net';

const message = {
  body: claim,
  contentType: "application/json"
};


//still to do: send message to claims topic and close connection to SB