"use client";

import {
  createContext,
  useCallback,
  useSyncExternalStore,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Catalog, Category, Product, Video } from "@/lib/products";
import { useSavedIds } from "@/lib/saved";

type ShopContextValue = {
  categories: Category[];
  products: Product[];
  videos: Video[];
  category: string;
  select: (id: string) => void;
  query: string;
  setQuery: (value: string) => void;
  /** The search box under the header (opened from the header, or from the bottom bar on phones). */
  searchOpen: boolean;
  setSearchOpen: (open: boolean | ((open: boolean) => boolean)) => void;
  showSaved: boolean;
  toggleSavedView: () => void;
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => void;
};

const subscribeUrl = () => () => {};
const getUrlSaved = () =>
  new URLSearchParams(window.location.search).get("saved") === "1";
const getUrlQuery = () =>
  (new URLSearchParams(window.location.search).get("q") || "").slice(0, 120);

const ShopContext = createContext<ShopContextValue | null>(null);

export function useShop(): ShopContextValue {
  const value = useContext(ShopContext);
  if (!value) throw new Error("useShop must be used inside <ShopProvider>");
  return value;
}

/** Scrolls to the product list. Honors the page's smooth-scroll / reduced-motion CSS. */
export function scrollToProducts() {
  document.getElementById("products")?.scrollIntoView();
}

/**
 * Shared shop state: the catalog (managed from /admin), the selected category
 * (drives hero carousel, tabs and grid), search text and saved services.
 */
export default function ShopProvider({
  catalog,
  initialCategory,
  children,
}: {
  catalog: Catalog;
  /** Chosen on the server from `?tab=` so ad deep links render the right tab immediately. */
  initialCategory: string;
  children: ReactNode;
}) {
  const { categories, products, videos } = catalog;
  const [category, setCategory] = useState(initialCategory);
  const [queryState, setQueryState] = useState<string | null>(null);
  const urlQuery = useSyncExternalStore(subscribeUrl, getUrlQuery, () => "");
  const query = queryState ?? urlQuery;
  const [savedOverride, setShowSaved] = useState<boolean | null>(null);
  const urlSaved = useSyncExternalStore(subscribeUrl, getUrlSaved, () => false);
  const showSaved = savedOverride ?? urlSaved;
  const [searchOpen, setSearchOpen] = useState(false);
  const { ids: storedIds, toggle: toggleSave } = useSavedIds();
  // Ignore saved services that were deleted from the catalog.
  const savedIds = useMemo(
    () => storedIds.filter((id) => products.some((p) => p.id === id)),
    [storedIds, products],
  );

  const select = useCallback((id: string) => {
    setCategory(id);
    setQueryState("");
    setShowSaved(false);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", id);
      url.searchParams.delete("saved");
      url.searchParams.delete("q");
      window.history.replaceState(window.history.state, "", url);
    } catch {
      // Not critical (e.g. sandboxed previews).
    }
  }, []);

  const setQuery = useCallback((value: string) => {
    setQueryState(value);
    if (value) setShowSaved(false);
  }, []);

  const toggleSavedView = useCallback(() => {
    setShowSaved((v) => !(v ?? urlSaved));
    setQueryState("");
  }, [urlSaved]);

  const value = useMemo<ShopContextValue>(
    () => ({
      categories,
      products,
      videos,
      category,
      select,
      query,
      setQuery,
      searchOpen,
      setSearchOpen,
      showSaved,
      toggleSavedView,
      savedIds,
      isSaved: (id) => savedIds.includes(id),
      toggleSave,
    }),
    [
      categories,
      products,
      videos,
      category,
      select,
      query,
      setQuery,
      searchOpen,
      showSaved,
      toggleSavedView,
      savedIds,
      toggleSave,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
