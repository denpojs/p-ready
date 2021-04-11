# p-ready
 Ready state promise wrapper

# Api
```js
let PReady = require('p-ready')

let ready = new PReady
ready.then(value => console.log('Done', value)) // Just like promise
ready.resolve(1)

// Ok, chaining is also supported
.pending() // It's about creating a new promise, try to comment this line
.then(value => console.log('Done', value))
.resolve(2)
.then(value => console.log('Done', value))
// See more in index.d.ts
```

# Usage example
```js
let PReady = require('p-ready')

class Transport {
	ready = new PReady

	connect() {
		// Connection simulation
		console.log('Connecting')

		setTimeout(() => {
			this.ready.resolve() // Connected
		}, 3000)
	}

	reconnect() {
		this.ready.pending()
		this.connect()
	}

	async send(data) {
		await this.ready // Here it is
		// or use this.ready.promise for direct access
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
