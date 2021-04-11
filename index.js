
module.exports = class PReady {
	constructor() {
		this.pending()
	}

	then(onfulfilled, onrejected) {
		this.promise.then(onfulfilled, onrejected)
		return this
	}

	catch(onrejected) {
		this.promise.catch(onrejected)
		return this
	}

	finally(onfinally) {
		this.promise.finally(onfinally)
		return this
	}

	pending() {
		if(!this.isPending)
			this.promise = new Promise((resolve, reject) => {
				this.resolver = resolve
				this.rejector = reject
			})

		this.isPending = true
		return this
	}

	resolve(value) {
		this.isPending = false
		this.resolver(value)
		return this
	}

	reject(reason) {
		this.isPending = false
		this.rejector(reason)
		return this
	}
}
