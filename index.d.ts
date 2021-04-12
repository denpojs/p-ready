
declare class PReady<T> {
	promise: Promise<T>
	isPending: boolean

	then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => any): this
	catch(onrejected?: (reason: any) => any): this
	finally(onfinally?: () => any): this
	
	resolve(): this
	reject(): this
	reset(): this
}
export = PReady
