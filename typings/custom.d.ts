
/**
 * ES6
 *
 * Sources:
 * - [maps]{@link https://github.com/Microsoft/TypeScript/issues/3290}
 */

interface Map<K, V> {
	clear(): void;
	delete(key: K): boolean;
	forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
	get(key: K): V;
	has(key: K): boolean;
	set(key: K, value: V): Map<K, V>;
	size: number;
}

declare var Map: {
	new <K, V>(...items: Array<any>): Map<K, V>;
	prototype: Map<any, any>;
}

interface ObjectConstructor {
	assign(target: any, ...sources: any[]): any
}

interface ArrayConstructor {
	from(...sources: any[]): any
}
