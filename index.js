const { ServiceBusClient } = require("@azure/service-bus");
const serviceBusClient = new ServiceBusClient("<connectionString>");
const sender = serviceBusClient.createSender("my-queue");

const claim = {
  claimid: 123,
  area: 100
};

const connectionString = 'faytoward.servicebus.windows.net';

const message = {
  body: claim,
  contentType: "application/json"
};

await sender.sendMessages(message[0]);