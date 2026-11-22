// Strapi 5 REST response shapes (flattened — no `attributes` wrapper in v5).

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPagination;
}

export interface StrapiEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale?: string;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number | null;
  height: number | null;
  mime: string;
  formats?: Record<string, { url: string; width: number; height: number }>;
}

export interface StrapiCollectionResponse<T extends StrapiEntity> {
  data: T[];
  meta: StrapiMeta;
}

export interface StrapiSingleResponse<T extends StrapiEntity> {
  data: T | null;
  meta: StrapiMeta;
}
