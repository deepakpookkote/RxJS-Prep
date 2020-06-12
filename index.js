
/**Base observable */
var button = document.querySelector('button');
var observer1 = {
    next: function (value) {
        console.log(value)
    },
    error: function (error) {
        console.log(error)
    },
    complete: function () {
        console.log('Complete')
    }
}

Rx.Observable.fromEvent(button, 'click')
    .throttleTime(3000)
    .map((data) => {
        return data.clientY
    })
    .subscribe(observer1);


/**setup observable from scratch */
var observer2 = {
    next: function (value) {
        console.log(value)
    },
    error: function (error) {
        console.log(error)
    },
    complete: function () {
        console.log('Complete')
    }
}

var subscription = Rx.Observable.create(function(obs) {
    button.onclick = ((event) => {
        obs.next(event);
    } )
}).subscribe(observer2);

setTimeout(() => {
    subscription.unsubscribe();
},5000)


/**Observable Intervals */

var observable = Rx.Observable.interval(1000);
var observer3 = {
    next: function (value) {
        console.log(value)
    }
}

observable
    .map((num) => num * 2)
    .throttleTime(1900)
    .subscribe(observer3);
