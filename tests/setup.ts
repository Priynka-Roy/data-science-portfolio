import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
afterEach(() => cleanup());
vi.stubGlobal("IntersectionObserver", class { observe() {} unobserve() {} disconnect() {} });

vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
