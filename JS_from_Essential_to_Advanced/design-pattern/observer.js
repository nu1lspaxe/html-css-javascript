const Subject = function() {
    let observers = [];

    return {
        subscribe: function(observer) {
            observers.push(observer);
            console.log("Observer " + observer.getIndex() + " has been subscribed.");
        },
        unsubscribe: function(observer) {
            let index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
            console.log("Observer " + observer.getIndex() + " has been unsubscribed.");
        },
        notify: function(observer) {
            let index = observers.indexOf(observer);
            if (index > -1) {
                observers[index].notify(index);
            }
        },
        notifyAll: function() {
            for (let i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            }
        }
    };
};

const Observer = function(index) {
    return {
        notify: function() {
            console.log("Observer " + index + " is notified.");
        },
        getIndex: function() {
            return index;
        }
    };
};

var subject = new Subject();

var observer1 = new Observer(1);
var observer2 = new Observer(2);
var observer3 = new Observer(3);
var observer4 = new Observer(4);

console.log("Wait for subscribe observers...")
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.subscribe(observer4);

subject.notify(observer2);
subject.unsubscribe(observer2);

subject.notifyAll();