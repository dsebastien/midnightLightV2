/**
 * Angular 2
 */

declare module 'angular2/render' {
	class NativeShadowDomStrategy {
		constructor(styleUrlResolver: any)
	}
	interface EventDispatcher {
		dispatchEvent(elementIndex: number, eventName: string, locals: Map<string, any>): any;
	}
	class RenderViewRef {}
	class RenderProtoViewRef {}
	class ShadowDomStrategy {}
	class Renderer {
		attachComponentView(hostViewRef: RenderViewRef, elementIndex: number, componentViewRef: RenderViewRef): any;
		attachViewInContainer(parentViewRef: RenderViewRef, boundElementIndex: number, atIndex: number, viewRef: RenderViewRef): any;
		callAction(viewRef: RenderViewRef, elementIndex: number, actionExpression: string, actionArgs: any): any;
		createRootHostView(hostProtoViewRef: RenderProtoViewRef, hostElementSelector: string): RenderViewRef;
		createView(protoViewRef: RenderProtoViewRef): RenderViewRef;
		dehydrateView(viewRef: RenderViewRef): any;
		destroyView(viewRef: RenderViewRef): any;
		detachComponentView(hostViewRef: RenderViewRef, boundElementIndex: number, componentViewRef: RenderViewRef): any;
		detachFreeView(view: RenderViewRef): any;
		detachViewInContainer(parentViewRef: RenderViewRef, boundElementIndex: number, atIndex: number, viewRef: RenderViewRef): any;
		hydrateView(viewRef: RenderViewRef): any;
		setElementProperty(viewRef: RenderViewRef, elementIndex: number, propertyName: string, propertyValue: any): any;
		setEventDispatcher(viewRef: RenderViewRef, dispatcher: EventDispatcher): any;
		setText(viewRef: RenderViewRef, textNodeIndex: number, text: string): any;
	}
}

declare module 'angular2/core' {
import { RenderViewRef } from 'angular2/render';
	class Injector {}
	class ViewRef {
		render: RenderViewRef;
	}
	class ProtoViewRef {}
	class ViewContainerRef {
		create(protoViewRef?: ProtoViewRef, atIndex?: number, context?: ElementRef, injector?: Injector): ViewRef;
		element: ElementRef;
	}
	class ElementRef {
		boundElementIndex: number;
		domElement: any;
		getAttribute(name: string): string;
		parentView: ViewRef;
	}
	class BaseQueryList<T> {
		add(obj: any): any;
		fireCallbacks(): any;
		onChange(callback: any): any;
		removeCallback(callback: any): any;
		reset(newList: any): any;
	}
	class QueryList<T> extends  BaseQueryList<T> {
		onChange(callback: any): any;
		removeCallback(callback: any): any;
	}
}

declare module 'angular2/src/facade/async' {
	class Observable {
		observer(generator: any): Object
	}
	class ObservableWrapper {
		static subscribe(emitter: Observable, onNext: Function, onThrow?: Function, onReturn?: Function): Object;
		static dispose(subscription: any): void;
		static callNext(emitter: EventEmitter, value: any): void;
		static callThrow(emitter: EventEmitter, error: any): void;
	}
	class EventEmitter extends  Observable {
		next(value: any): any;
		observer(generator: any): any;
		return(value: any): any;
		throw(error: any): any;
		toRx(): Rx.Observable<any>;
	}
}

declare module 'angular2/src/facade/browser' {
	var document: any;
	const KeyboardEvent;
}

declare module 'angular2/src/facade/lang' {
	class FunctionWrapper {
		static apply(fn: Function, posArgs?: Array<any>): any
	}
	class StringWrapper {
		static toLowerCase(s: string): string
	}
	class NumberWrapper {
		static parseInt(text: string, radix: number): number;
	}
	function isJsObject(obj: any): boolean;
	function isPresent(obj: any): boolean;
	function isFunction(obj: any): boolean;
	function isString(obj: any): boolean;
}

declare module 'angular2/src/router/browser_location' {
	class BrowserLocation {
		path(): string
	}
}

declare module "angular2/annotations" {
	var Attribute: any;
	var Parent: any;
	var Query: any;
	const onDestroy;
	function Directive(arg: any): (target: any) => any;
	function Component(arg: any): (target: any) => any;
	function View(arg: any): (target: any) => any;
}

declare module "angular2/change_detection" {
	class Pipe {}
	class PipeFactory {}
	class NullPipeFactory extends PipeFactory {}
	class PipeRegistry {
		constructor(pipes: any)
	}
	class JitChangeDetection {}
	class ChangeDetection {}
	class DynamicChangeDetection {}
	var defaultPipes: any;
}

declare module "angular2/directives" {
	class NgFor {}
	class NgIf {}
}

declare module "angular2/forms" {
	class CheckboxControlValueAccessor {}
	interface ControlValueAccessor {
		registerOnChange(fn: any): void;
		registerOnTouched(fn: any): void;
		writeValue(obj: any): void;
	}
	class DefaultValueAccessor {}
	class NgControl {
		valueAccessor: ControlValueAccessor;
	}
	class NgControlGroup {}
	class NgControlName {}
	class NgForm {}
	class NgFormControl {}
	class NgFormModel {}
	class NgModel {}
	class NgRequiredValidator {}
	class FormBuilder {
		group(controls: any): any
		controls: any;
	}
	class Control {
		constructor(controls: any)
		updateValue(value: any)
		valueChanges: any;
		valid: boolean;
		pristine: boolean;
	}
	class ControlGroup {
		constructor(controls: any)
		controls: any;
		valueChanges: any;
	}
	class Validators {
		static required: any;
	}
	const formInjectables: any;
	const formDirectives: any;
}

declare module 'angular2/src/http/static_response' {
	class Response {
		headers: any;
		text(): string;
	}
}

declare module 'angular2/router' {
	class Instruction {}
	class Router {
		navigate(url: string): Promise<any>
		config(config: any): Promise<any>
		subscribe(onNext: Function): Promise<any>
	}
	var RouterOutlet: any;
	var RouterLink: any;
	var routerInjectables: any;
	var RouteConfig: any;
	var LocationStrategy: any;
	var HashLocationStrategy: any;
}


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
