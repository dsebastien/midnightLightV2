import {Post} from "./posts.model";

describe("posts model tests", () => {
	it("should be instanciable", () => {
		let post:Post = new Post();

		expect(post).toBeDefined();
	});
});
