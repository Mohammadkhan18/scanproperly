export type AddBlogType = {
  id?: number | string;
  title: string;
  image: File | FileList | null;
  description: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  altImageAttributes: string;
  canonicalUrl: string;
  openGraph: string;
  xmlSitemap: string;
  schemaMetaData: string;
  favicon: File | FileList | null;
  urlEditing: string;
  internalLinking: string;
  anchorTexting: string;
};
