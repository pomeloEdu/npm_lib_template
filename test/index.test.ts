import { describe, expect, it } from "vitest";
import NPM_LIB_TEMPLATE from "../src";

describe("packageName", () => {
  it.todo("pass", () => {
    const npm_lib_template = new NPM_LIB_TEMPLATE();
    expect(npm_lib_template).toBeInstanceOf(NPM_LIB_TEMPLATE);
  });
});
