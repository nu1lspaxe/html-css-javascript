// Before ES6, it will be :
// const Participant = function(...);
// Participant.prototype = {...};

class Participant {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }
    receive(message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
}

const Chatroom = function() {
    const participants = [];

    return {
        
        register: function(participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function(message, from , to) {
            if (to) {
                // single message
                to.receive(message, from);
            } else {
                // broadcast message
                for (let key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

var participant1 = new Participant("1");
var participant2 = new Participant("2");
var participant3 = new Participant("3");
var participant4 = new Participant("4");
var participant5 = new Participant("5");

var chatroom = new Chatroom();
chatroom.register(participant1);
chatroom.register(participant2);
chatroom.register(participant3);
chatroom.register(participant4);
chatroom.register(participant5);

participant1.send("Today's weather is good!");
participant3.send("Give you a gift!", participant1);
participant2.send("Hi, may I have this pleasure to know you?", participant5);
participant5.send("You're good person.", participant2)
participant5.send("Can you honour me a dance?", participant1)