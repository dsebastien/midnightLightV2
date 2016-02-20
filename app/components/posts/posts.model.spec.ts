import {Post} from "./posts.model";

import {describe, it, expect} from "angular2/testing";

describe("posts model tests", () => {
	it("should be instanciable", () => {
		let post:Post = new Post();

		expect(post).toBeDefined();
	});
});
