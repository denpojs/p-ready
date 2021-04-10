# p-ready
 Ready state promise wrapper

# Api
```js
let ready = require('p-ready')
let assert = require('assert').strict

let listener1 = ready()
listener1.then(() => console.log('Done', listener1))

let listener2 = ready(listener1) // Will use listener1 if it is not completed
listener2.then(() => console.log('Done', listener2))

assert.equal(listener1, listener2)

listener2.resolve()
```

# Usage example
```js
let pReady = require('p-ready')

class Transport {
	ready = pReady()

	connect() {
		// Simulate connection
		this.ready = pReady(this.ready)
		console.log('Connecting')

		setTimeout(() => {
			this.ready.resolve() // Connected
		}, 3000)
	}

	reconnect() {
		this.connect()
	}

	async send(data) {
		await this.ready // Here it is
		console.log('The', data, 'was sent, hooray!')
	}
}

let transport = new Transport
transport.connect()

let num = 0
setInterval(() => {
	// We send data regardless of the connection
	transport.send('test ' + num)
	num++
}, 1000)

setTimeout(() => {
	transport.reconnect() // Suppose we reconnect
}, 3000)
```