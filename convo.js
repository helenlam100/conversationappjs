

if(msg.payload.output) {
  if(msg.payload.output.text) {
      msg.payload = {"text": msg.payload.output.text[msg.payload.output.text.length-1]}
  }
} else {
  msg.payload = {"text": "Sorry I did not understand"}
}

return msg;
