/* tslint:disable */

async function doAsyncOp () {
	var val = await asynchronousOperation();
	console.log(val);
	return val;
};

function asynchronousOperation() {
	return 5;
}

doAsyncOp();
