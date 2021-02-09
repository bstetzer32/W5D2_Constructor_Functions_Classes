
/***********************************************************************
Let's create a constructor function to represent email messages that contains a
shared method!

Define a constructor function named `Email` that accepts four arguments that
initialize the following properties:

* recipient - the recipient of the email message
* sender - the sender of the email message
* subject - the subject for the email message
* text - the text for the email message

Additionally, add a method to the `Email` constructor function's prototype
that'll be shared across all instances. The method should be named
`getSubjectAndText()` and return the `subject` and `text` property values
formatted as "{subject}: {text}".

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Use the command:

`node problems/02-constructor-function-prototype-method.js`
***********************************************************************/
// Examples:
function Email(recipient, sender, subject, text){

  this.recipient =recipient;
  this.sender = sender;
  this.subject = subject;
  this.text = text;

}

Email.prototype.getSubjectAndText = function(){
  return `${this.subject}: ${this.text}`
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = Email;
} catch {
  module.exports = null;
}
