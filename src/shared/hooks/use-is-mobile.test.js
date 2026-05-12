import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import useIsMobile from "./use-is-mobile";

describe("useIsMobile", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  function resizeWindow(width) {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });

    window.dispatchEvent(new Event("resize"));
  }

  it("returns true when window width is less than 768px", () => {
    resizeWindow(500);

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("returns false when window width is 768px", () => {
    resizeWindow(768);

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("returns false when window width is greater than 768px", () => {
    resizeWindow(1024);

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("updates to true when window is resized to mobile width", () => {
    resizeWindow(1024);

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    act(() => {
      resizeWindow(500);
    });

    expect(result.current).toBe(true);
  });

  it("updates to false when window is resized to desktop width", () => {
    resizeWindow(500);

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);

    act(() => {
      resizeWindow(1200);
    });

    expect(result.current).toBe(false);
  });

  it("adds and removes the resize event listener", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useIsMobile());

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );
  });
});
