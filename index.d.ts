
interface ReadyPromise extends Promise<void> {
	pending: boolean
	resolve: undefined | (() => void)
}

declare function pReady(ready?: ReadyPromise): ReadyPromise
export = pReady
