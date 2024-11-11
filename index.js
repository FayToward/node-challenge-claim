import { ServiceBusClient } from "@azure/service-bus";
const serviceBusClient = new ServiceBusClient("Endpoint=sb://faytoward.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=//AYOU7Xden9jvLCpvcLNgtpkLKIja4oI+ASbCQOmAk=");
const sender = serviceBusClient.createSender("claims");

const claim = {
  claimid: 123,
  area: 100
};

const message = {
  body: claim,
  contentType: "application/json"
};

await sender.sendMessages(message);
console.log("message sent")
