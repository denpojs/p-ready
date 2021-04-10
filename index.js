
module.exports = function pReady(ready) {
	if(ready?.pending) return ready

	let resolver
	ready = new Promise(resolve => resolver = () => resolve(ready.pending = false))
	ready.pending = true
	ready.resolve = resolver
	return ready
}
